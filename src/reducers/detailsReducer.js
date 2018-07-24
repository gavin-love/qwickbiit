const detailsReducer = (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_RESTAURANT_DETAILS":
      return action.restaurantDetails;
    default:
      return state;
  }
};

export default detailsReducer;