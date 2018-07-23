import React, { Component } from 'react';
import { connect } from "react-redux";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lat, lng } = this.props.location

    const location = {
      lat,
      lng
    }

    const restaurantTabs = this.props.restaurants.find((restaurant, index) => {
      const { name, rating, location, phone, price, transactions, display_phone, distance, review_count, image_url } = restaurant
      //location.display_address

      const miles = (distance * 0.000621371).toFixed(2)

      return (
        <div>what?</div>
      )
    })

    return (
      <div className="Details_view">
        <div className="Details_view_header">
          <Map
            google={this.props.google}
            initialCenter={location}
          >
          </Map>
        </div>
        <ul className="Details_view_body">
          {restaurantTabs}
        </ul>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  location: state.location,
  restaurants: state.restaurants
});

const googleWrapper = GoogleApiWrapper({
  apiKey: 'AIzaSyCY43ng22LgVeBO4LISUvcF7nbMRTaDYPs'
})(Details)

export default connect(mapStateToProps, null)(googleWrapper)