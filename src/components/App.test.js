import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mapDispatchToProps, mapStateToProps } from "./App";


describe('mapState', () => {
  it('should map location to state', () => {
    const mockState = {
      location: {
        lat: 40,
        lng: -40
      }
    }
    const expected = {
      location: {
        lat: 40,
        lng: -40
      }
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })

  it('should map restaurants to state', () => {
    const mockState = {
      restaurants: [{ name: 'john' }, { name: 'susan' }]
    }
    const expected = {
      restaurants: [{ name: 'john' }, { name: 'susan' }]
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })

  it('should map restaurant details to state', () => {
    const mockState = {
      restaurantDetails: { name: 'hello' }
    }
    const expected = {
      restaurantDetails: { name: 'hello' }
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })

  it('should map error to state', () => {
    const mockState = {
      error: {
        message: 'scary'
      }
    }
    const expected = {
      error: {
        message: 'scary'
      }
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })
})
