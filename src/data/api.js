import axios from 'axios';
import config from '../config';

const API_URL = `https://newsapi.org/v2/everything?sources=bbc-news&language=en&apiKey=${config.API_KEY}`;

function getAllArticles() {
  return axios.get(API_URL).then(response => response.data.articles);
}

export { getAllArticles };
