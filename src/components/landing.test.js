// export const mapDispatchToProps = dispatch => ({
//   handleLocation: location => dispatch(locationAction(location)),
//   handleError: err => dispatch(errorAction(err)),
//   handleRestaurants: restaurants => dispatch(restaurantsAction(restaurants))
// });

import { mapDispatchToProps } from "./App";

describe("mapDispatch", () => {

  it("should call dispatch with correct params for handleRestaurants", () => {

    const mockDispatch = jest.fn();

    const mappedProps = mapDispatchToProps(mockDispatch);

    const mockAction = {
      type: "ADD_RESTAURANTS",
      restaurants: [{ name: 'john/s' }, { name: 'sally/s' }]
    };

    mappedProps.handleRestaurants([{ name: 'john/s' }, { name: 'sally/s' }]);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });


});