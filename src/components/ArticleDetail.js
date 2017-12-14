import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { fontSizes, dimensions, lineHeights, colors } from '../theme';
import ArticlePublishTimeAgo from './ArticlePublishTimeAgo';

const GUTTER = dimensions.basePadding / 2;

const ArticleDetail = ({ article, readMore }) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: article.urlToImage }} />
    </View>
    <View style={styles.textContent}>
      <Text style={styles.title}>{article.title}</Text>
      <ArticlePublishTimeAgo style={styles.publishedAt} publishDate={article.publishedAt} />
      <View style={styles.separator} />
      <Text style={styles.description}>{article.description}</Text>
      <TouchableOpacity style={styles.readMoreButton} onPress={readMore}>
        <Text style={styles.readMoreButtonText}>Read More</Text>
      </TouchableOpacity>
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
  publishedAt: {
    fontSize: fontSizes.normal,
    color: colors.dove,
    padding: GUTTER,
    paddingTop: GUTTER / 2
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
  },
  readMoreButton: {
    margin: GUTTER,
    paddingVertical: GUTTER
  },
  readMoreButtonText: {
    color: colors.primary,
    fontSize: fontSizes.normal
  }
});
