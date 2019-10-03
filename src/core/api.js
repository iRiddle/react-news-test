import axios from "axios";

const AXIOS = axios.create({
  baseURL: "https://mysterious-reef-29460.herokuapp.com/api/v1/"
});

export default AXIOS;
