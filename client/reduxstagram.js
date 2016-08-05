import React from 'react';
import {render} from 'react-dom';
import Raven from 'raven-js';

import { sentry_url, logException } from './data/config';

Raven.config(sentry_url, {
	tags: {
		git_commit: 'lifgjhslkdjfbnskjdfhgsnof',
		userLevel: 'editor'
	}
}).install();

// logException(new Error('download failed!'), {
// 	email: 'royalcj@yahoo.ca'
// })

// Raven.captureMessage('Something bad happened!')
// Raven.showReportDialog();


import css from './styles/style.styl';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import store, { history } from './store';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view/:postId" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
)

render( router, document.getElementById('root'));