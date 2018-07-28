import { mapDispatchToProps, mapStateToProps } from './details';

describe('mapState', () => {

  it('should map location to state', () => {
    const mockState = {}
    const expected = {}
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })


}) 