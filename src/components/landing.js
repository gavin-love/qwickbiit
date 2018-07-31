import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { connect } from "react-redux";
import { locationAction, errorAction, restaurantsAction } from '../actions/index';
import nearbyRestaurants from './nearbyRestaurants';
import { withRouter } from 'react-router-dom';
import logo from '../assets/qb-logo.png';
import loading from '../assets/loading1.png';
import { googleApiKey } from '../apiKeys';
import './landing.css';
import PropTypes from 'prop-types'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip_code: "",
      is_loading: false,
      price: "1"
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = e.target
    this.setState({
      price: name
    })
  }

  handleCurrentLocation = event => {
    event.preventDefault();
    this.setState({ is_loading: true })

    const options = {
      enableHighAccuracy: true,
      timeout: 8000,
      maximumAge: 0
    };

    const success = async (pos) => {
      const position = pos.coords;

      const location = {
        lat: position.latitude,
        lng: position.longitude
      }

      const price = this.state.price

      this.props.handleLocation(location)
      let restaurants = await nearbyRestaurants(location, price);
      this.props.handleRestaurants(restaurants)
      this.setState({ is_loading: false })
      this.props.history.push('/main')
    };

    const error = (err) => this.props.handleError(err)

    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  handleZipCode = event => {
    event.preventDefault();
    this.setState({ is_loading: true })
    const coder = new this.props.google.maps.Geocoder();

    coder.geocode({
      'address': `${this.state.zip_code}`
    }, (results, status) => {

      if (status === 'OK') {
        const location = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }

        const price = this.state.price

        const updateStore = async () => {
          this.props.handleLocation(location)
          const restaurants = await nearbyRestaurants(location, price);

          if (restaurants === 'err') {
            this.props.handleError(restaurants)
          }
          this.props.handleRestaurants(restaurants)
          this.setState({ is_loading: false })
          this.props.history.push('/main')
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
        <img className="qb_logo" src={logo} alt="qwickbite logo" />
        <form className="price_buttons">
          <button name="1" className="price_button buttons_default" onClick={this.handleSubmit} autoFocus>$</button>
          <button name="2" className="price_button buttons_default" onClick={this.handleSubmit}>$$</button>
          <button name="3" className="price_button buttons_default" onClick={this.handleSubmit}>$$$</button>
        </form>
        <form className="landing_form" onSubmit={this.handleZipCode} >
          <input
            className="zipcode"
            type="text"
            name="zip_code"
            value={this.state.zipcode}
            placeholder="Zip Code"
            onChange={this.handleChange}
          />
          <button className="find buttons_default">find</button>
        </form>
        <form className="current_location" onSubmit={this.handleCurrentLocation}>
          <button className="submit_current_location buttons_default"> current location</button>
        </form>
        {this.state.is_loading && <img className="loading" src={loading} alt="page is loading" />}
      </div >
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleLocation: location => dispatch(locationAction(location)),
  handleError: err => dispatch(errorAction(err)),
  handleRestaurants: restaurants => dispatch(restaurantsAction(restaurants))
});

const googleWrapper = GoogleApiWrapper({
  apiKey: googleApiKey
})(Landing)

export default withRouter(connect(null, mapDispatchToProps)(googleWrapper))

Details.propTypes = {
  handleLocation: PropTypes.func,
  handleError: PropTypes.func,
  handleRestaurants: PropTypes.func,
}
