import { createStore, combineReducers, applyMiddleware } from 'redux';
import recipeReducer from './recipeReducer';
import thunkMiddleware from 'redux-thunk';

//
// Store...
//
const rootReducer = combineReducers({
  recipes: recipeReducer,
});

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
