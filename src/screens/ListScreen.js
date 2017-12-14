import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getArticlesSelector } from '../store/articles';
import ArticlesList from '../components/ArticlesList';

class ListScreen extends Component {
  static navigationOptions = {
    title: 'BBC News',
    headerBackTitle: 'Back'
  };

  constructor() {
    super();

    this.navigateToDetailScreen = this.navigateToDetailScreen.bind(this);
  }

  navigateToDetailScreen(article) {
    this.props.navigation.navigate('Detail', {
      article
    });
  }

  render() {
    return <ArticlesList articles={this.props.articles} onArticleSelected={this.navigateToDetailScreen} />;
  }
}

const mapStateToProps = state => ({
  articles: getArticlesSelector(state)
});

export default connect(mapStateToProps)(ListScreen);
