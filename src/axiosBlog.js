import axios from "axios";

const axiosBlog = axios.create({
  baseURL: "https://blog-mirafal-default-rtdb.firebaseio.com/",
});

export default axiosBlog;
