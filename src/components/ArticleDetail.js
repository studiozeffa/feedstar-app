import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { fontSizes, dimensions, lineHeights, colors } from '../theme';

const GUTTER = dimensions.basePadding / 2;

const ArticleDetail = ({ article }) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: article.urlToImage }} />
    </View>
    <View style={styles.textContent}>
      <Text style={styles.title}>{article.title}</Text>
      <View style={styles.separator} />
      <Text style={styles.description}>{article.description}</Text>
    </View>
  </View>
);

export default ArticleDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    marginBottom: GUTTER
  },
  image: {
    aspectRatio: 16 / 9
  },
  textContent: {
    padding: GUTTER
  },
  title: {
    fontSize: fontSizes.large,
    lineHeight: lineHeights.large,
    padding: GUTTER
  },
  description: {
    fontSize: fontSizes.normal,
    lineHeight: lineHeights.normal,
    padding: GUTTER
  },

  separator: {
    backgroundColor: colors.concrete,
    height: 1,
    margin: GUTTER
  }
});
