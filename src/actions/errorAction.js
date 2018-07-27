export const errorAction = ({ message }) => {
  return {
    type: "ADD_ERROR",
    error: message
  };
};
