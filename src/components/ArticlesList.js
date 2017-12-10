import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ArticleListItem from './ArticlesListItem';
import ArticleListItemSeparator from './ArticlesListItemSeparator';

class ArticlesList extends Component {
  keyExtractor(item) {
    return item.url;
  }

  renderItem({ item }) {
    return <ArticleListItem article={item} />;
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
