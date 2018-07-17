import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './stores/configureStore';

console.log('store - ', store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
