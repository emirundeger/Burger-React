import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-ef65a.firebaseio.com/"
});

export default instance;
