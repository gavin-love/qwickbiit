const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ERROR":
      return action.error;
    default:
      return state;
  }
};

export default errorReducer;