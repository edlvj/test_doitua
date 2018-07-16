import axios from 'axios';
import config from '../config';

const REQUEST_URL = 'https://api.github.com/users/';

var reqParams = {
  headers: {'Authorization': `token ${ config.githubApi.token }`}
};

export default function getProfile(accountName) {
  const encodedAccountName = encodeURIComponent(accountName);
  const requestUrl = `${REQUEST_URL}${encodedAccountName}`;

  return axios.get(requestUrl, reqParams);
}