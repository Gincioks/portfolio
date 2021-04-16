import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerapp-678ea-default-rtdb.firebaseio.com",
  headers: { "Access-Control-Allow-Origin": "*" },
});

export default instance;
