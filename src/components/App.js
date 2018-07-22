import React, { Component } from 'react';
import Header from '../components/mainHeader'
import './App.css';
import Footer from '../components/mainFooter';
import MapContainer from '../components/map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MapContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
