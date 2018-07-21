import React, { Component } from 'react';
import Header from '../components/mainHeader'
import './App.css';
import Footer from '../components/mainFooter';
import MapContainer from '../components/map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      currentPosition: {}
    })
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

    const success = (pos) => {
      let position = pos.coords;

      let currentLocation = {
        lat: position.latitude,
        lng: position.longitude
      }

      this.setState({
        currentPosition: currentLocation
      })
    };

    const error = (err) => console.warn(`ERROR(${err.code}): ${err.message}`);

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MapContainer position={this.state.currentPosition} />
        <Footer />
      </div>
    );
  }
}

export default App;
