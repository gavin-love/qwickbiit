import locationReducer from './locationReducer';

describe('describe locationReducer', () => {
  const initialState = {}

  const locationAction = {
    type: "ADD_LOCATION",
    location: {
      lat,
      lng
    }
  }

  const newState = locationReducer(initialState, locationAction)

  expect(newState).toEqual(locationAction.location)
})