const detailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_RESTAURANT_DETAILS":
      return action.restaurantDetails;
    default:
      return state;
  }
};

export default detailsReducer;