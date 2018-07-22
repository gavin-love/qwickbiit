import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nearbyPlaces: []
    }
  }

  nearbyPlaces = async (
    // latitude,
    // longitude,
  ) => {

    let restaurants;

    const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

    const prefix = `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/search?`;

    const lat = `latitude=39.7392`;
    const limit = 'limit=5';
    const term = 'term=restaurants';
    const long = `longitude=-104.9903`;
    const price = 'price=2'
    const radius = `radius=1609`;
    const sort = 'sort_by=rating';
    const open = 'open_now=true';
    const reservation = 'attributes=reservation'

    let headers = new Headers();
    headers.append("Authorization", "Bearer " + yelpApiKey);

    try {
      const result =
        await fetch(`${prefix}${lat}&${long}&${term}&${price}&${limit}&${radius}&${open}&${reservation}&${sort}`,
          {
            headers
          });

      const data = await result.json();
      restaurants = data.businesses;

      console.log(restaurants)
      // return suggestedRestaurantsCleaner(restaurants);
    } catch (error) {
      return [];
    }
  };

  // nearbyPlaces(mapProps, map, clickEvent) {
  //   const { google } = mapProps
  //   const service = new google.maps.places.PlacesService(map);

  //   service.nearbySearch({
  //     location: { lat: 39.7392, lng: -104.9903 },
  //     radius: 50,
  //     keyword: ['restaurants']
  //   }, result => this.setState({ nearbyPlaces: result })
  //   )
  // }

  render() {
    // const location = this.props.position;
    const location = {
      lat: 39.7392,
      lng: -104.9903
    }

    return (
      <div>
        <Map google={this.props.google}
          initialCenter={location}
          onReady={this.nearbyPlaces}
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

export default GoogleApiWrapper({
})(MapContainer)
