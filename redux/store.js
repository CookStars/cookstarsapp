import { createStore, combineReducers, applyMiddleware } from 'redux'
import recipes from './reducers/recipes'
import user from './reducers/user'
import thunkMiddleware from 'redux-thunk'
import users from './reducers/users'

//
// Store...
//
const rootReducer = combineReducers({
    recipes,
    user,
    users,
})

export default createStore(rootReducer, applyMiddleware(thunkMiddleware))
