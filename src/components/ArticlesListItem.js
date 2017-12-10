import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes } from '../theme';

class ArticlesListItem extends Component {
  render() {
    const { article } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode={'tail'}>
          {article.title}
        </Text>
      </View>
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
