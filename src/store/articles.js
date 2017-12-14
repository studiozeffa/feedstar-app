import { getAllArticles } from '../data/api';

const FETCH_ARTICLES_SUCCESS = '[Articles] Fetch Success';

const fetchArticles = () => {
  return dispatch => {
    getAllArticles().then(articles => {
      dispatch(fetchArticlesSuccess(articles));
    });
  };
};

const fetchArticlesSuccess = articles => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: articles
});

const actionCreators = {
  fetchArticles,
  fetchArticlesSuccess
};

const initialState = {
  collection: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        collection: action.payload
      };
  }
  return state;
}

const getArticlesSelector = state => state.articles.collection;

export default reducer;

export { getArticlesSelector, actionCreators };
