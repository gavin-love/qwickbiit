import { combineReducers } from "redux";
import locationReducer from './locationReducer';
import errorReducer from './errorReducer';
import restaurantsReducer from './restaurantsReducer';
import detailsReducer from './detailsReducer';


const rootReducer = combineReducers({
  location: locationReducer,
  restaurants: restaurantsReducer,
  restaurantDetails: detailsReducer,
  error: errorReducer
});

export default rootReducer;