import React, { Component } from 'react';

import articles from '../data/articles.json';
import ArticlesList from '../components/ArticlesList';

class ListScreen extends Component {
  static navigationOptions = {
    title: 'BBC News'
  };

  render() {
    return <ArticlesList articles={articles} />;
  }
}

export default ListScreen;
