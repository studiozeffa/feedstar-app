import React, { Component } from 'react';

import articles from '../data/articles.json';
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
    return <ArticlesList articles={articles} onArticleSelected={this.navigateToDetailScreen} />;
  }
}

export default ListScreen;
