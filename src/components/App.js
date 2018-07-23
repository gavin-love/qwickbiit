import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import './App.css';
import Login from './login';
import Main from './main';
import locationAction from '../actions/locationAction';
import errorAction from '../actions/errorAction';



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
        <Login />
        {this.props.location.lat && this.props.restaurants.length > 0 && <Main />}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleLocation: location => dispatch(locationAction(location)),
  handleError: err => dispatch(errorAction(err))
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
