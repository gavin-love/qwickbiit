import { mapDispatchToProps, mapStateToProps } from './main';

describe('mapState', () => {

  it('should map location to state', () => {
    const mockState = {
      location: {
        lat: 3000,
        lng: -3000
      }
    }
    const expected = {
      location: {
        lat: 3000,
        lng: -3000
      }
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })

  it('should map restaurants to state', () => {
    const mockState = {
      restaurants: [{ name: 'Connor' }, { name: 'Jenny' }]
    }
    const expected = {
      restaurants: [{ name: 'Connor' }, { name: 'Jenny' }]
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })
})

describe("mapDispatch", () => {

  it("should call dispatch with correct params for handleDetails", () => {

    const mockDispatch = jest.fn();

    const mappedProps = mapDispatchToProps(mockDispatch);

    const mockAction = {
      type: "ADD_RESTAURANT_DETAILS",
      restaurantDetails: { name: "Casper" }
    };

    mappedProps.handleDetails({
      name: "Casper"
    });

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
});