import errorReducer from './errorReducer';

describe('errorReducer', () => {
  it('returns an error message with type ADD_ERROR', () => {

    const initialState = '';
    const mockState = 'hey';

    const mockAction = {
      type: 'ADD_ERROR',
      error: 'hey'
    }

    const newState = errorReducer(initialState, mockAction);

    expect(newState).toEqual(mockState);
  })
})