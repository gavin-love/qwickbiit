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

