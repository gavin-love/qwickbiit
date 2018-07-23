const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_LOCATION_ERROR":
      return action.error;
    default:
      return state;
  }
};

export default errorReducer;