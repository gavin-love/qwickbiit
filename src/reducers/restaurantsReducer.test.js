import restaurantsReducer from './restaurantsReducer';

describe('restaurantsReducer', () => {
  it('should return an array of restaurants when called with the restaurantsAction', () => {
    const initialState = []

    const restaurantsAction = {
      type: "ADD_RESTAURANTS",
      restaurants: restaurants
    }

    const newState = restaurantsReducer(initialState, restaurantsAction);

    expect(newState).toEqual(restaurantsAction.restaurants)
  })
})