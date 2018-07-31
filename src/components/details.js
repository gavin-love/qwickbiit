import React, { Component } from 'react';
import { connect } from "react-redux";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { withRouter, NavLink } from 'react-router-dom';
import { googleApiKey } from '../apiKeys';
import './details.css'

class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lat, lng } = this.props.location

    const userLocation = {
      lat,
      lng
    }

    const { name, rating, location, price, display_phone, distance, image_url, coordinates } = this.props.details

    const miles = (distance * 0.000621371).toFixed(2)
    const style = {
      width: '98%',
      height: '200px',
      border: '2px solid rgb(10, 26, 94)',
      margin: '0 auto'
    }

    const restaurantLocation = {
      lat: coordinates.latitude,
      lng: coordinates.longitude
    }

    return (
      <div className="details_container">
        <Map
          style={style}
          google={this.props.google}
          initialCenter={userLocation}
        >
          <Marker position={userLocation} />
          <Marker position={restaurantLocation} />
        </Map>
        <div className="details_view_body">
          <div className="details_image_container" style={{ backgroundImage: `url(${image_url})` }}>
          </div>
          <h1 className="details title">{name}</h1>
          <p className="details body address">{location.address1} {location.address2}</p>
          <p className="details body location">{location.city}, {location.zip_code}</p>
          <p className="details body phone">{display_phone}</p>
          <p className="details body price">price: <span className="rating_values">{price}</span></p>
          <p className="details body rating">rating: <span className="rating_values">{rating}</span><span className="out_of"> / </span><span className="rating_values">5</span></p>
          <p className="details rating">distance: <span className="rating_values">{miles}mi</span></p>
          <NavLink to="/main" className="link_to_main">MAIN</NavLink>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  location: state.location,
  restaurants: state.restaurants,
  details: state.restaurantDetails
});

const googleWrapper = GoogleApiWrapper({
  apiKey: googleApiKey
})(Details)

export default withRouter(connect(mapStateToProps, null)(googleWrapper))