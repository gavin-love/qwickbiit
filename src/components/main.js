import React, { Component } from 'react';
import { connect } from "react-redux";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { nearbyRestaurants } from './nearbyRestaurants';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lat, lng } = this.props.location

    const location = {
      lat,
      lng
    }

    const markers = this.props.restaurants.map((restaurant, index) => {
      const { latitude, longitude, name } = restaurant.coordinates;
      return (
        <Marker
          lat={latitude}
          lng={longitude}
          key={index}
          name={name}
        />
      );
    });

    return (
      <div>
        <Map
          google={this.props.google}
          initialCenter={location}
        >
          {markers}
        </Map>
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
})(Main)

export default connect(mapStateToProps, null)(googleWrapper)







