import axios from "axios";

const BASE_URL_API = "https://api.github.com/";

const Api = axios.create({
  baseURL: BASE_URL_API.toString(),
});

export default Api;