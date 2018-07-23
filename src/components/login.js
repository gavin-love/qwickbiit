import React, { Component } from "react";
import { connect } from "react-redux";
import nearbyRestaurants from './nearbyRestaurants';
import restaurantsAction from '../actions/restaurantsAction';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    //const user = findUser(this.state)
    // this.props.handleLogin(user);
    const { lat, lng } = this.props.location
    let restaurants = await nearbyRestaurants(lat, lng);
    this.props.handleRestaurants(restaurants)
  };

  render() {
    return (
      <form className="log_in" onSubmit={this.handleSubmit}>
        <h5 className="login_title">Account Login</h5>

        <input
          className="login"
          type="text"
          name="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <input
          className="login"
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange}
        />
        <button className="login_button">Submit</button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  // handleLogin: user => dispatch(loginAction(user)),
  handleRestaurants: restaurants => dispatch(restaurantsAction(restaurants))
});

export const mapStateToProps = state => ({
  location: state.location
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
