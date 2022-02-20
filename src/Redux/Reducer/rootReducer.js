import { combineReducers } from 'redux';
import BatReducer from './BatReducer';
import BallReducer from './BallReducer';


const rootReducer = combineReducers({
  bat : BatReducer,
  ball : BallReducer,
})

export default rootReducer;
