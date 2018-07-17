import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

//import { initSagas } from './initSagas';
import rootReducer from '../reducers';
import { fetchStarWarsPersonSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware)
	);
console.log('getState', store.getState());
sagaMiddleware.run(fetchStarWarsPersonSaga);
//store.dispatch({type: "FETCH_STAR_WARS_SUCCESS"})


export default store;