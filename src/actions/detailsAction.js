export const detailsAction = (restaurantDetails) => {
  // console.log(restaurantDetails)
  return {
    type: "ADD_RESTAURANT_DETAILS",
    restaurantDetails
  };
};