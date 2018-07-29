import React, { Component } from 'react';
import { connect } from "react-redux";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { withRouter, NavLink } from 'react-router-dom';

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

    const { name, rating, location, price, transactions, display_phone, distance, image_url, coordinates } = this.props.details

    const miles = (distance * 0.000621371).toFixed(2)

    return (
      <div className="detail_view">
        <NavLink to="/main">MAIN</NavLink>
        <div className="detail_view_header">
          <img src={image_url} alt="restaurant" />
        </div>
        <div className="detail_view_body">
          <h1>{name}</h1>
          <p>{location.address1} {location.address2}</p>
          <p>{location.city}, {location.zip_code}</p>
          <p>{display_phone}</p>
          <p>services: {transactions[0]} {transactions[1]} {transactions[2]}</p>
          <p>price: {price}</p>
          <p>rating: {rating}</p>
          <p>distance: {miles} miles</p>
          <Map
            google={this.props.google}
            initialCenter={userLocation}
          >
            <Marker position={userLocation} />
            <Marker position={coordinates} />
          </Map>
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
  apiKey: 
})(Details)

export default withRouter(connect(mapStateToProps, null)(googleWrapper))