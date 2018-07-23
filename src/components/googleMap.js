import React, { Component } from 'react';
import { connect } from "react-redux";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { nearbyRestaurants } from './nearbyRestaurants';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const location = {
      lat: 39.7392,
      lng: -104.9903
    }

    return (
      <div>
        <Map google={this.props.google}
          initialCenter={location}
          onReady={nearbyRestaurants}
        >
          <Marker
            initialCenter={location}
          // onReady={this.nearbyMarkers}
          />
        </Map>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  location: state.location
});

// export default connect(
//   mapStateToProps,
//   null
// )(GoogleMap)

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCY43ng22LgVeBO4LISUvcF7nbMRTaDYPs'
})(GoogleMap)





