import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mapDispatchToProps, mapStateToProps } from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('mapState', () => {
  it('should map location to state', () => {
    const mockState = {}
    const expected = {}
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })
  it('should map restaurants to state', () => {
    const mockState = {}
    const expected = {}
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })
})
