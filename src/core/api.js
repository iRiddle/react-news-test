import axios from "axios";

const AXIOS = axios.create({
  baseURL: "https://mysterious-reef-29460.herokuapp.com/api/v1/"
});

// AXIOS.interceptors.request.use(config => {
//   config.params = {
//     api_key: "5fcdb863130c33d2cb8f1612b76cbd30",
//     language: "ru-RU"
//   };
//   return config;
// });

export default AXIOS;
