import { mapDispatchToProps } from "./landing";

describe("mapDispatch", () => {

  it("should call dispatch with correct params for handleLocation", () => {

    const mockDispatch = jest.fn();

    const mappedProps = mapDispatchToProps(mockDispatch);

    const mockAction = {
      type: "ADD_LOCATION",
      location: {
        lat: 40,
        lng: -40
      }
    };

    mappedProps.handleLocation({
      lat: 40,
      lng: -40
    });

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });

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

  it("should call dispatch with correct params for handleError", () => {

    const mockDispatch = jest.fn();

    const mappedProps = mapDispatchToProps(mockDispatch);

    const mockAction = {
      type: "ADD_ERROR",
      error: 'yellow'
    };

    mappedProps.handleError({
      message: 'yellow'
    });

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });


});