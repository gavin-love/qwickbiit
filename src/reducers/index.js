import { combineReducers } from "redux";
import locationReducer from './locationReducer';
import errorReducer from './errorReducer';
import restaurantsReducer from './restaurantsReducer';


const rootReducer = combineReducers({
  location: locationReducer,
  restaurants: restaurantsReducer,
  error: errorReducer
});

export default rootReducer;