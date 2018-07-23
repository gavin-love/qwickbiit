export const restaurantsAction = (restaurants) => {

  return {
    type: "ADD_RESTAURANTS",
    restaurants: restaurants
  };
};

export default restaurantsAction