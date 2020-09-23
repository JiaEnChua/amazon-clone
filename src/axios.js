import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-b869b.cloudfunctions.net/api",
  // "http://localhost:5001/clone-b869b/us-central1/api", //The API (cloud fn) URL
});

export default instance;
