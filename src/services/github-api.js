import axios from 'axios';
import { githubApi } from '../config';

const REQUEST_URL = 'https://api.github.com/users/';

var reqParams = {
  headers: {'Authorization': `token ${ githubApi.token }`}
};

module.exports = {
  getProfile: (accountName) => {
    const encodedAccountName = encodeURIComponent(accountName);
    const requestUrl = `${REQUEST_URL}${encodedAccountName}`;
  
    return axios.get(requestUrl, reqParams).then(res => {
      return res;
    });
  }
}