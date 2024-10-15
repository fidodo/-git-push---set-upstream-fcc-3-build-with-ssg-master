const axios = require("axios");
require('dotenv').config();

module.exports = async function() {
  try {
const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=99f5205af4544a20bfdf4cbd5687bb21&pageSize=15`);
    return response.data;
  } catch (error) {
    console.error(error);
  }

};