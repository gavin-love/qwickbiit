export const detailsAction = (restaurantDetails) => {
  return {
    type: "ADD_RESTAURANT_DETAILS",
    restaurantDetails
  };
};

export const errorAction = ({ message }) => {
  return {
    type: "ADD_ERROR",
    error: message
  };
};

export const locationAction = ({ lat, lng }) => {
  return {
    type: "ADD_LOCATION",
    location: {
      lat,
      lng
    }
  };
};

export const restaurantsAction = (restaurants) => {

  return {
    type: "ADD_RESTAURANTS",
    restaurants: restaurants
  };
};