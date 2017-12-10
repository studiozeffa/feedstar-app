import React from 'react';
import { View, StyleSheet } from 'react-native';
import { dimensions, colors } from '../theme';

const ArticleListItemSeparator = () => <View style={styles.container} />;

export default ArticleListItemSeparator;

const styles = StyleSheet.create({
  container: {
    marginLeft: dimensions.basePadding,
    height: 1,
    backgroundColor: colors.concrete
  }
});
