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



