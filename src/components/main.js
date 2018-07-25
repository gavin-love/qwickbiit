import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { detailsAction } from '../actions/detailsAction';
import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  getRestaurantDetails = async (id) => {
    const restaurant = await this.props.restaurants.find(restaurant => restaurant.id === id)
    this.props.handleDetails(restaurant)
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
      const { id, name, rating, location, phone, price, transactions, display_phone, distance, review_count, image_url } = restaurant

      const miles = (distance * 0.000621371).toFixed(2)
      return (
        <li
          className="list_items"
          key={index}
          id={id}
          onClick={() => this.getRestaurantDetails(id)}
        >
          <img className="main_images"
            src={image_url}
          />
          <div className="list_info">
            <h1
              className="list_items_title"
            >{name}</h1>
            <div className="list_items_details">
              <p>Rating: {rating}</p>
              <p>Price Range: {price}</p>
              <p>Distance: {miles} miles</p>
            </div>
          </div>
        </li>
      )
    })

    const style = {
      width: '100%',
      height: '70%'
    }

    return (
      <div className="main_view">
        <div className="main_view_header">
          <Map
            style={style}
            zoom={14}
            google={this.props.google}
            initialCenter={location}
          >
            {markers}
          </Map>
        </div>
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
  apiKey: 'AIzaSyCY43ng22LgVeBO4LISUvcF7nbMRTaDYPs'
})(Main)

export default connect(mapStateToProps, mapDispatchToProps)(googleWrapper)







