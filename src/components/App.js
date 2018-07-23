import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import './App.css';
import Login from './login';
import Main from './main';
import locationAction from '../actions/locationAction';
import errorAction from '../actions/errorAction';
import restaurantsAction from '../actions/restaurantsAction';
import nearbyRestaurants from './nearbyRestaurants';



class App extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const success = async (pos) => {
      let position = pos.coords;

      let location = {
        lat: position.latitude,
        lng: position.longitude
      }
      this.props.handleLocation(location)
      let restaurants = await nearbyRestaurants(location);
      this.props.handleRestaurants(restaurants)
    };

    const error = (err) => this.props.handleError(err)

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  render() {
    return (
      <div className="App">
        {this.props.location.lat && this.props.restaurants.length > 0 && <Main />}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleLocation: location => dispatch(locationAction(location)),
  handleError: err => dispatch(errorAction(err)),
  handleRestaurants: restaurants => dispatch(restaurantsAction(restaurants))
});

export const mapStateToProps = state => ({
  location: state.location,
  restaurants: state.restaurants
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
