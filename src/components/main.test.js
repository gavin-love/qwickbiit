import { mapDispatchToProps, mapStateToProps } from './main';

describe('mapState', () => {

  it('should map location to state', () => {
    const mockState = {}
    const expected = {}
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })

  it('should map restaurants to state', () => {
    const mockState = {}
    const expected = {}
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })
})