import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const restService = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

restService.interceptors.response.use(
  (response) => {
    if (response.config.url === "/login" && response.config.method === "post") {
      window.history.back();
    }

    return response;
  },
  (error) => {
    if ([401, 403].includes(error.response?.status)) {
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

export default restService;
