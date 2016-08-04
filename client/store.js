import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the root reducer
import rootReducer from './reducers/index';

// import the data.
import comments from './data/comments';
import posts from './data/posts';

//create and object fro the default data.

const defaultState = {
	posts,
	comments
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory);

export default store;