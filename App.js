import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import articlesReducer from './src/store/articles';
import Navigator from './src/navigator';

const reducers = combineReducers({
  articles: articlesReducer
});

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, middleware);

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
