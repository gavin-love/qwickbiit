import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 41.504539,
          lng: -81.613350
        }}
        zoom={12}
      >
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCY43ng22LgVeBO4LISUvcF7nbMRTaDYPs'
})(MapContainer)
