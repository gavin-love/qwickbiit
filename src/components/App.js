import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Header from './mainHeader'
import './App.css';
import Footer from './mainFooter';
import Login from './login';
import GoogleMap from './googleMap';
import locationAction from '../actions/locationAction';
import errorAction from '../actions/errorAction';
// import { nearbyRestaurants } from './nearbyRestaurants';


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
      timeout: 10000,
      maximumAge: 0
    };

    const success = (pos) => {
      let position = pos.coords;

      let location = {
        lat: position.latitude,
        lng: position.longitude
      }
      this.props.handleLocation(location)
    };

    const error = (err) => this.props.handleError(err)

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleLocation: location => dispatch(locationAction(location)),
  handleError: err => dispatch(errorAction(err))
});

export const mapStateToProps = state => ({
  location: state.location
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
