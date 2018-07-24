import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import './App.css';
import Landing from './landing';
import Main from './main';
import Details from './details';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <Landing />
        {this.props.restaurantDetails.id && <Details />}
        {this.props.location.lat && this.props.restaurants.length > 0 && <Main />}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  location: state.location,
  restaurants: state.restaurants,
  restaurantDetails: state.restaurantDetails
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
