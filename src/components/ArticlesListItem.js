import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { dimensions, colors, fontSizes } from '../theme';

class ArticlesListItem extends Component {
  constructor() {
    super();

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { article, onArticleSelected } = this.props;
    onArticleSelected(article);
  }

  render() {
    const { article } = this.props;

    return (
      <TouchableHighlight underlayColor={colors.dove} onPress={this.handlePress}>
        <View style={styles.container}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode={'tail'}>
            {article.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ArticlesListItem;

const styles = StyleSheet.create({
  container: {
    padding: dimensions.basePadding,
    backgroundColor: colors.white
  },
  title: {
    fontSize: fontSizes.normal
  }
});
