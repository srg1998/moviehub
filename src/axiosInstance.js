// axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTYwYzI2N2FmNzYwM2EzNjYwMmI0OGI5ZTdlOGUwZCIsInN1YiI6IjY1YWM0OWRmZDEwMGI2MDBjYjdmZDMwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2LMowuFULjV9o-ZqKv3h_pFwmsMTtsVQIiExbjJee1Y",
  }, // Replace with your API base URL
});

export default instance;
