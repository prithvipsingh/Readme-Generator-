const axios = require("axios");

const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
 
    return axios
      .get(queryUrl)
      .catch((error) => console.log(error));
  },
};

module.exports = api;
