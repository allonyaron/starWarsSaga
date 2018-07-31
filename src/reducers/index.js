import { combineReducers } from 'redux';
import * as types from '../types';
import error from './error';


const initialState = {
	filmsData: []
}

const starWarsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_STAR_WARS_SUCCESS: 
			return {
				...state,
				filmsData: action.filmsData,
			}
		case (types.FETCH_STAR_WARS_FAILURE):
			return {
				...state,
				filmsData: []
			}
		default:
			return state;
	}
}


const rootReducer = combineReducers({
	starWarsReducer,
	error
})

export default rootReducer
