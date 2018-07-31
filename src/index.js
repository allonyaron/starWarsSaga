import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container';

import { Provider } from 'react-redux';
import store from './stores/configureStore';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
