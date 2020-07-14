import { createStore, combineReducers, applyMiddleware } from 'redux';
import recipeReducer from './recipeReducer';
import userReducer from './userReducer';
import thunkMiddleware from 'redux-thunk';

//
// Store...
//
const rootReducer = combineReducers({
  recipes: recipeReducer,
  user: userReducer,
});

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
