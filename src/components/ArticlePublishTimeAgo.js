import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';

const ArticlePublishDate = ({ publishDate, style }) => <Text style={style}>{moment(publishDate).fromNow()}</Text>;

export default ArticlePublishDate;
