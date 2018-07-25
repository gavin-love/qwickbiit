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
        <Route exact path="/" component={Landing} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/details" component={Details} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  location: state.location,
  restaurants: state.restaurants,
  restaurantDetails: state.restaurantDetails,
  error: state.error
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
