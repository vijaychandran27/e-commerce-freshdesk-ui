import axios from 'axios';

const baseURL = process.env.baseURL || 'http://localhost:4000';
const apiURL = baseURL + '/api';

export const postCall = (url, body) => {
    axios.post(apiURL + url, { data: body })
      .then(response => {
        return response;
      })
      .catch(error => {
        console.error('Error posting data:', error);
        return {};
      });
};

export const getCall = (url) => {
  axios.get(apiURL+ url)
      .then(response => {
        return response;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return {};
      });
};

// exports.default = {
//     postCall,
//     getCall
// };
