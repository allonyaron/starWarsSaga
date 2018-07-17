import * as types from '../types';

var defaultState = {
	errorMsg : ''
}

function error(state = defaultState, action) {
	switch(action.type) {
		case (types.FETCH_STAR_WARS_SUCCESS):
			return {
				...state,
				errorMsg: ''
			}
		case (types.FETCH_STAR_WARS_FAILURE):
		console.log('Fauilure - ', action.errorMsg);
			return {
				...state,
				errorMsg: action.errorMsg
			}
		default:
			return state;
	}
}

export default error;