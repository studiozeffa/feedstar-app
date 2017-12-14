import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getArticlesSelector, actionCreators } from '../store/articles';
import ArticlesList from '../components/ArticlesList';
import ArticlesLoading from '../components/ArticlesLoading';

class ListScreen extends Component {
  static navigationOptions = {
    title: 'BBC News',
    headerBackTitle: 'Back'
  };

  constructor() {
    super();

    this.navigateToDetailScreen = this.navigateToDetailScreen.bind(this);
  }

  componentDidMount() {
    this.props.fetchArticles();
  }

  navigateToDetailScreen(article) {
    this.props.navigation.navigate('Detail', {
      article
    });
  }

  render() {
    if (!this.props.articles.length) {
      return <ArticlesLoading />;
    }

    return <ArticlesList articles={this.props.articles} onArticleSelected={this.navigateToDetailScreen} />;
  }
}

const mapStateToProps = state => ({
  articles: getArticlesSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(actionCreators.fetchArticles())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
