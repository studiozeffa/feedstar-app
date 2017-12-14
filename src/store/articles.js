import articles from '../data/articles.json';

const initialState = {
  collection: articles
};

function reducer(state = initialState, action) {
  return state;
}

const getArticlesSelector = state => state.articles.collection;

export default reducer;

export { getArticlesSelector };
