export const errorAction = ({ message }) => {
  return {
    type: "ADD_LOCATION_ERROR",
    error: message
  };
};
