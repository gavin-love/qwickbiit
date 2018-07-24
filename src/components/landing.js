import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from "react-redux";
import { locationAction } from '../actions/locationAction';
import { errorAction } from '../actions/errorAction';
import { restaurantsAction } from '../actions/restaurantsAction';
import nearbyRestaurants from './nearbyRestaurants';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip_code: "",
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleCurrentLocation = event => {
    event.preventDefault();

    const options = {
      enableHighAccuracy: true,
      timeout: 8000,
      maximumAge: 0
    };

    const success = async (pos) => {
      let position = pos.coords;

      let location = {
        lat: position.latitude,
        lng: position.longitude
      }
      this.props.handleLocation(location)
      let restaurants = await nearbyRestaurants(location);
      this.props.handleRestaurants(restaurants)
    };

    const error = (err) => this.props.handleError(err)

    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  handleZipCode = event => {
    event.preventDefault();
    const coder = new this.props.google.maps.Geocoder();

    coder.geocode({
      'address': `${this.state.zip_code}`
    }, (results, status) => {

      if (status === 'OK') {
        const location = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }

        const updateStore = async () => {
          this.props.handleLocation(location)
          let restaurants = await nearbyRestaurants(location);
          this.props.handleRestaurants(restaurants)
        }
        return updateStore();
      } else {
        this.props.handleError(status)
      }
    })

  }

  render() {
    return (
      <div className="landing">
        <form className="landing_form" onSubmit={this.handleZipCode} >
          <input
            className="landing_zipcode"
            type="text"
            name="zip_code"
            value={this.state.zipcode}
            placeholder="Enter zip-code"
            onChange={this.handleChange}
          />
          <button className="submit_zipcode">Submit</button>
        </form>
        <form className="current_location" onSubmit={this.handleCurrentLocation}>
          <button className="submit_current_location">Use Current Location</button>
        </form>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleLocation: location => dispatch(locationAction(location)),
  handleError: err => dispatch(errorAction(err)),
  handleRestaurants: restaurants => dispatch(restaurantsAction(restaurants))
});

const googleWrapper = GoogleApiWrapper({
  apiKey: 'AIzaSyCY43ng22LgVeBO4LISUvcF7nbMRTaDYPs'
})(Landing)

export default connect(null, mapDispatchToProps)(googleWrapper)
