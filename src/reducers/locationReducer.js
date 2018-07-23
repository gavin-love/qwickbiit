const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_LOCATION":
      return action.location;
    default:
      return state;
  }
};

export default locationReducer;