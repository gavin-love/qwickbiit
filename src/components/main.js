import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter, NavLink } from 'react-router-dom';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { detailsAction } from '../actions/index';
import { googleApiKey } from '../apiKeys';
import './main.css';
import PropTypes from 'prop-types';

export class Main extends Component {
  constructor(props) {
    super(props);
  }

  getRestaurantDetails = async (props, id) => {
    if (props) {
      const restaurant = await this.props.restaurants.find(restaurant => restaurant.id === props.id)
      await this.props.handleDetails(restaurant)
      this.props.history.push('/details')
    } else if (id) {
      const restaurant = await this.props.restaurants.find(restaurant => restaurant.id === id)
      await this.props.handleDetails(restaurant)
      this.props.history.push('/details')
    }
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
          onClick={this.getRestaurantDetails}
          position={center}
          key={index}
          name={restaurant.name}
          id={restaurant.id}
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
          onClick={() => this.getRestaurantDetails(undefined, id)}
        >
          <div className="image_container" style={{ backgroundImage: `url(${image_url})` }}>
          </div>
          <div className="list_info">
            <h1
              className="list_items_title"
            >{name}</h1>
            <div className="list_items_details">
              <p className="details">rating: <span className="detail_values">{rating}</span><span className="out_of"> / </span><span className="detail_values">5</span></p>
              <p className="details">distance: <span className="detail_values">{miles}mi</span></p>
            </div>
          </div>
        </li>
      )
    })

    const mobileMap = {
      width: '98%',
      height: '250px',
      border: '2px solid rgb(10, 26, 94)',
      margin: '0 auto'
    }
    const tabletMap = {
      width: '98%',
      height: '400px',
      border: '2px solid rgb(10, 26, 94)',
      margin: '0 auto'
    }
    const computerMap = {
      width: '50%',
      height: '99%',
      border: '2px solid rgb(10, 26, 94)',
      margin: '0',
      top: '3px',
    }

    let width = window.innerWidth

    if (width < 500) {
      return (
        <div className="main_view">
          <Map
            style={mobileMap}
            zoom={13}
            google={this.props.google}
            initialCenter={location}
          >
            {markers}
          </Map>
          <ul className="main_view_body">
            {restaurantTabs}
            <NavLink to="/" className="link_to_home">Home</NavLink>
          </ul>
        </div>
      )
    } else if (width >= 500 && width < 800) {
      return (
        <div className="main_view">
          <Map
            style={tabletMap}
            zoom={13}
            google={this.props.google}
            initialCenter={location}
          >
            {markers}
          </Map>
          <ul className="main_view_body">
            {restaurantTabs}
            <NavLink to="/" className="link_to_home">Home</NavLink>
          </ul>
        </div>
      )
    } else {
      return (
        <div className="main_view">
          <Map
            style={computerMap}
            zoom={13}
            google={this.props.google}
            initialCenter={location}
          >
            {markers}
          </Map>
          <ul className="main_view_body">
            {restaurantTabs}
            <NavLink to="/" className="link_to_home">Home</NavLink>
          </ul>
        </div>
      )
    }
  }
}

Main.propTypes = {
  location: PropTypes.object,
  restaurants: PropTypes.array,
  handleDetails: PropTypes.func,
}

export const mapStateToProps = state => ({
  location: state.location,
  restaurants: state.restaurants
});

export const mapDispatchToProps = dispatch => ({
  handleDetails: (restaurant) => dispatch(detailsAction(restaurant))
})

const googleWrapper = GoogleApiWrapper({
  apiKey: googleApiKey
})(Main)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(googleWrapper));








