const axios = require("axios");
const apiUrl = "https://pixabay.com/api";
// export const getPhotos = () =>
//   axios.get(`${apiUrl}/?key=13967940-97eb47dee4de67049b1f74102`);

export const getMenus = () =>
  axios.get('http://localhost:3000/api/tasks/')
