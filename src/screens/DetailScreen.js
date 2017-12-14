import React, { Component } from 'react';
import { WebBrowser } from 'expo';
import ArticleDetail from '../components/ArticleDetail';

class DetailScreen extends Component {
  static navigationOptions = {
    title: 'BBC News'
  };

  constructor() {
    super();

    this.readMore = this.readMore.bind(this);
  }

  readMore() {
    const { url } = this.props.navigation.state.params.article;
    WebBrowser.openBrowserAsync(url);
  }

  render() {
    const { article } = this.props.navigation.state.params;
    return <ArticleDetail article={article} readMore={this.readMore} />;
  }
}

export default DetailScreen;
