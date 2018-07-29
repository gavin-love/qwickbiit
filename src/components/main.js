import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter, NavLink } from 'react-router-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { detailsAction } from '../actions/index';
import { googleApiKey } from '../apiKeys';
import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  getRestaurantDetails = async (id) => {
    const restaurant = await this.props.restaurants.find(restaurant => restaurant.id === id)
    await this.props.handleDetails(restaurant)
    this.props.history.push('/details')
  }

  render() {
    const { lat, lng } = this.props.location

    const location = {
      lat,
      lng
    }

    const markers = this.props.restaurants.map((restaurant, index) => {

      const { latitude, longitude } = restaurant.coordinates;
      const center = {
        lat: latitude,
        lng: longitude
      }

      return (
        <Marker
          position={center}
          key={index}
          name={restaurant.name}
        />
      );
    });

    const restaurantTabs = this.props.restaurants.map((restaurant, index) => {
      const { id, name, rating, distance, image_url } = restaurant

      const miles = (distance * 0.000621371).toFixed(2)
      return (
        <li
          className="list_items"
          key={index}
          id={id}
          onClick={() => this.getRestaurantDetails(id)}
        >
          <div className="image_container" style={{ backgroundImage: `url(${image_url})` }}>
          </div>
          <div className="list_info">
            <h1
              className="list_items_title"
            >{name}</h1>
            <div className="list_items_details">
              <p className="details">Rating: {rating}/5</p>
              <p className="details">Distance: {miles}mi</p>
            </div>
          </div>
        </li>
      )
    })

    const style = {
      width: '100%',
      height: '200px',
    }

    return (
      <div className="main_view">
        <div className="main_view_header">
          <NavLink to="/">Landing</NavLink>
        </div>
        <Map
          style={style}
          zoom={13}
          google={this.props.google}
          initialCenter={location}
        >
          {markers}
        </Map>
        <ul className="main_view_body">
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

const mapDispatchToProps = dispatch => ({
  handleDetails: (restaurant) => dispatch(detailsAction(restaurant))
})

const googleWrapper = GoogleApiWrapper({
  apiKey: googleApiKey
})(Main)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(googleWrapper))







