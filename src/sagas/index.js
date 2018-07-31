import {
    takeLatest,
    put,
    call,
    all
} from 'redux-saga/effects'

import {
    FETCH_STAR_WARS_REQUEST,
    FETCH_STAR_WARS_SUCCESS,
    FETCH_STAR_WARS_FAILURE
} from '../types'

export function* fetchStarWarsPersonSaga() {
    yield takeLatest(FETCH_STAR_WARS_REQUEST, personSaga);
}

function* fetchUrlSaga(url) {
    let response = yield call(fetch, url)
    return yield response.json();
}

// pull out film saga
// do I need more actions?
// how do I cleanly pull out data from response
// why yield to the response.json conversion - why do I need a yield there? which function calls would warant a yield

function* personSaga(action) {
    try {
        const personResponse = yield fetch(`${action.url}`);
        if (personResponse.status < 200 && personResponse.status > 300) {
    	    yield put({
                type: FETCH_STAR_WARS_FAILURE,
                errorMsg: 'There was an error in the Galaxy'
            });
	    }

        const {
            films
        } = yield personResponse.json();

        let filmsData = yield all(films.map(filmUrl => {
            return call(fetchUrlSaga, filmUrl)
        }));

        yield put({
            type: FETCH_STAR_WARS_SUCCESS,
            filmsData: filmsData.sort(function(a,b){
            	return new Date(a.release_date) - new Date(b.release_date);
            })
        });
    } catch (error) {
    	console.log('SAGA FAILURE - ', error);
        yield put({
            type: FETCH_STAR_WARS_FAILURE,
            errorMsg: 'There was an error in the Galaxy'
        });
    }
}