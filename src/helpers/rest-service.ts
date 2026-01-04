import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const restService = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

restService.interceptors.response.use(
  (response) => response,
  (error) => {
    const currentUrl = new URL(window.location.href).pathname;

    if (
      [401, 403].includes(error.response?.status) &&
      currentUrl !== `/login`
    ) {
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

export default restService;
