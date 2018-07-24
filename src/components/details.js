import React, { Component } from 'react';
import { connect } from "react-redux";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

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
    console.log(userLocation)
    const { id, name, rating, location, price, transactions, display_phone, distance, review_count, image_url, coordinates } = this.props.restaurantDetails

    return (
      <div className="detail_view">
        <div className="detail_view_header">
          <img src={image_url} />
        </div>
        <div className="detail_view_body">
          <h1>{name}</h1>
          <p>{rating}</p>
          <p>{location.display_address}</p>
          <p>{price}</p>
          <p>{transactions}</p>
          <p>{display_phone}</p>
          <p>{distance}</p>
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
  apiKey: 'AIzaSyCY43ng22LgVeBO4LISUvcF7nbMRTaDYPs'
})(Details)

export default connect(mapStateToProps, null)(googleWrapper)