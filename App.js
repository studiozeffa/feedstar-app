import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import articlesReducer from './src/store/articles';
import Navigator from './src/navigator';

const reducers = combineReducers({
  articles: articlesReducer
});

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
