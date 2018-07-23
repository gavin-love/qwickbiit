export const locationAction = ({ lat, lng }) => {
  return {
    type: "ADD_LOCATION",
    location: {
      lat,
      lng
    }
  };
};

export default locationAction