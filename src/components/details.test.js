import { mapDispatchToProps, mapStateToProps } from './details';

describe('mapState', () => {
  it('should map location to state', () => {
    const mockState = {
      location: {
        lat: 300,
        lng: -300
      }
    }
    const expected = {
      location: {
        lat: 300,
        lng: -300
      }
    }
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  })

  it('should map restaurants to state', () => {
    const mockState = {
      restaurants: [{ name: 'David' }, { name: 'Sally' }]
    }
    const expected = {
      restaurants: [{ name: 'David' }, { name: 'Sally' }]
    }
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  })

  it('should map restaurant details to state', () => {
    const mockState = {
      details: {}
    }
    const expected = {
      details: {}
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })
}) 