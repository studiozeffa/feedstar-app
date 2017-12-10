import React, { Component } from 'react';
import ArticleDetail from '../components/ArticleDetail';

class DetailScreen extends Component {
  static navigationOptions = {
    title: 'BBC News'
  };

  render() {
    const { article } = this.props.navigation.state.params;
    return <ArticleDetail article={article} />;
  }
}

export default DetailScreen;
