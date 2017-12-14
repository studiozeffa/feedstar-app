import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

import { dimensions, colors, fontSizes, platform } from '../theme';
import ArticlePublishTimeAgo from './ArticlePublishTimeAgo';

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
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode={'tail'}>
              {article.title}
            </Text>
            <ArticlePublishTimeAgo style={styles.publishedAt} publishDate={article.publishedAt} />
          </View>
          {platform.isIOS && <Icon style={styles.accessory} name="ios-arrow-forward" />}
        </View>
      </TouchableHighlight>
    );
  }
}

export default ArticlesListItem;

const styles = StyleSheet.create({
  container: {
    padding: dimensions.basePadding,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleContainer: {
    flex: 1
  },
  title: {
    fontSize: fontSizes.normal
  },
  publishedAt: {
    paddingTop: dimensions.basePadding / 4,
    color: colors.dove,
    fontSize: fontSizes.small
  },
  accessory: {
    fontSize: fontSizes.large,
    color: colors.silver,
    marginLeft: dimensions.basePadding
  }
});
