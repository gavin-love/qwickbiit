import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlaces: [],
    }

  }

  // nearbyPlaces = (props, map, clickEvent) => {
  //   const { google } = props
  //   const service = new google.maps.places.PlacesService(map);

  //   service.nearbySearch({
  //     location: this.props.position,
  //     radius: 500,
  //     keyword: ['food']
  //   }, result => this.setState({ selectedPlaces: result })
  //   )
  // }      switch this method to get nearby places from yelp then render markers with yelp lat and lng!!!!




  render() {
    const location = this.props.position;
    // const markers = this.state.selectedPlaces.map(restaurant => {
    //   console.log(restaurant)
    //   return (
    //     <Marker
    //       position={{ lat: 80, lng: -141 }}
    //     />
    //   )
    // })

    return (
      <div>
        <Map
          google={this.props.google}
          initialCenter={location}
          onReady={this.nearbyPlaces}
        >
          <Marker position={this.props.position} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCY43ng22LgVeBO4LISUvcF7nbMRTaDYPs'
})(MapContainer)
