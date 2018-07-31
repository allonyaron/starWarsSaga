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

sagaMiddleware.run(fetchStarWarsPersonSaga);



export default store;