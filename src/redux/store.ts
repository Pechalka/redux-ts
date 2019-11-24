import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';

import { reducer as counterReducer } from './counter'


const rootReducer = combineReducers({
	counterReducer
})

export const create = () => {
	return createStore(rootReducer, applyMiddleware(thunk));
}