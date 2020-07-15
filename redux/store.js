import { createStore, combineReducers, applyMiddleware } from 'redux';
import recipeReducer from './recipeReducer';
import userReducer from './userReducer';
import thunkMiddleware from 'redux-thunk';
import leaderboardReducer from './leaderboardReducer';

//
// Store...
//
const rootReducer = combineReducers({
  recipes: recipeReducer,
  user: userReducer,
  users: leaderboardReducer
});

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
