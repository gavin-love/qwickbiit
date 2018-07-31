import locationReducer from './locationReducer';

describe('describe locationReducer', () => {
  it('should return a location object when called with the locationActions', () => {

    const initialState = {}

    const locationAction = {
      type: "ADD_LOCATION",
      location: {
        lat: 56,
        lng: -56
      }
    }

    const newState = locationReducer(initialState, locationAction)

    expect(newState).toEqual(locationAction.location)
  })
})