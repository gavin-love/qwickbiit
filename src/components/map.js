import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: { name: 'hello' }
    }
  }

  mapClicked(mapProps, map, clickEvent) {
    const { google } = mapProps
    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch({
      location: { lat: 39.7392, lng: -104.9903 },
      radius: 50,
      keyword: ['restaurants']
    }, result => console.log(result))
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
          onClick={this.mapClicked} />

        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCY43ng22LgVeBO4LISUvcF7nbMRTaDYPs'
})(MapContainer)
