import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ArticleListItem from './ArticlesListItem';
import ArticleListItemSeparator from './ArticlesListItemSeparator';

class ArticlesList extends Component {
  constructor() {
    super();

    this.renderItem = this.renderItem.bind(this);
  }

  keyExtractor(item) {
    return item.url;
  }

  renderItem({ item }) {
    const { onArticleSelected } = this.props;
    return <ArticleListItem article={item} onArticleSelected={onArticleSelected} />;
  }

  render() {
    const { articles } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={articles}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={ArticleListItemSeparator}
        />
      </View>
    );
  }
}

export default ArticlesList;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
