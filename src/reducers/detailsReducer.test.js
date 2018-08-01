import detailsReducer from './detailsReducer';

describe('detailsReducer', () => {
  it('should return a restaurantDetails object when called with the detailsAction', () => {
    const initialState = {};

    const detailsAction = {
      type: "ADD_RESTAURANT_DETAILS",
      restaurantDetails: { name: 'charlie/s' }
    }

    const newState = detailsReducer(initialState, detailsAction)

    expect(newState).toEqual(detailsAction.restaurantDetails)
  })
})