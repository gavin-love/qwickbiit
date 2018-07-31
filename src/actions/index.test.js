import * as actions from './index';

describe('locationAction', () => {
  it('should have a type of ADD_LOCATION', () => {

    const location = {
      lat: 40,
      lng: -140
    }

    const actual = actions.locationAction(location);

    const expected = {
      type: "ADD_LOCATION",
      location: {
        lat: location.lat,
        lng: location.lng
      }
    }

    expect(actual).toEqual(expected)
  })
})

describe('restaurantsAction', () => {
  it('should have a type of ADD_RESTAURANTS', () => {

    const restaurants = [{ name: 'Ruby/s' }, { name: 'John/s' }];

    const actual = actions.restaurantsAction(restaurants)

    const expected = {
      type: "ADD_RESTAURANTS",
      restaurants: restaurants
    }

    expect(actual).toEqual(expected)
  })
})

describe('detailsAction', () => {
  it('should have a type of ADD_RESTAURANT_DETAILS', () => {

    const restaurantDetails = {
      name: 'Sally/s',
      location: 'John/stown'
    }

    const actual = actions.detailsAction(restaurantDetails)

    const expected = {
      type: "ADD_RESTAURANT_DETAILS",
      restaurantDetails
    }

    expect(actual).toEqual(expected)
  })
})

describe('errorAction', () => {
  it('should have a type of ADD_ERROR', () => {
    const error = {
      message: "what is this"
    }

    const actual = actions.errorAction(error)

    const expected = {
      type: "ADD_LOCATION_ERROR",
      error: error.message
    }

    expect(actual).toEqual(expected)
  })
})