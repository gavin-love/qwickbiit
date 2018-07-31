import { Main, mapDispatchToProps, mapStateToProps } from './main';
import { shallow } from "enzyme";
import React from "react";

describe('App', () => {
  it('should call getRestaurantDetails with the correct params', () => {
    const mockHandleDetails = jest.fn();
    const mockHistory = [];
    const mockLocation = { lat: 40, lng: -40 }
    const mockLatitude = 40
    const mockLongitude = -40
    const mockRestaurant = { name: "Holly", coordinates: { latitude: mockLatitude, longitude: mockLongitude } }
    const mockRestaurants = [{ mockRestaurant }]

    const wrapper = shallow(<Main handleDetails={mockHandleDetails} history={mockHistory} location={mockLocation} restaurants={mockRestaurants} />)
    wrapper.instance().getRestaurantDetails(mockLocation, 1)

    expect(handleDetails).toHaveBeenCalledWith(mockRestaurant)
  })
})

describe('mapState', () => {

  it('should map location to state', () => {
    const mockState = {
      location: {
        lat: 3000,
        lng: -3000
      }
    }
    const expected = {
      location: {
        lat: 3000,
        lng: -3000
      }
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })

  it('should map restaurants to state', () => {
    const mockState = {
      restaurants: [{ name: 'Connor' }, { name: 'Jenny' }]
    }
    const expected = {
      restaurants: [{ name: 'Connor' }, { name: 'Jenny' }]
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })
})

describe("mapDispatch", () => {

  it("should call dispatch with correct params for handleDetails", () => {

    const mockDispatch = jest.fn();

    const mappedProps = mapDispatchToProps(mockDispatch);

    const mockAction = {
      type: "ADD_RESTAURANT_DETAILS",
      restaurantDetails: { name: "Casper" }
    };

    mappedProps.handleDetails({
      name: "Casper"
    });

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
});