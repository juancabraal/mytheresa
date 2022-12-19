import { debug } from "loglevel";

const getUrl = (config) => {
  if (config.baseURL) {
    return config.url?.replace(config.baseURL, "");
  }
  return config.url;
};

export const applyLogInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.request.use((config) => {
    debug(
      `%c ${config.method?.toUpperCase()} - ${getUrl(config)}:`,
      "color: #0086b3; font-weight: bold",
      config
    );
    return config;
  });
  axiosInstance.interceptors.response.use(
    (response) => {
      debug(
        `%c ${response.status} - ${getUrl(response.config)}:`,
        "color: #008000; font-weight: bold",
        response
      );
      return response;
    },
    (error) => {
      if (error.response) {
        debug(
          `%c ${error.response.status} - ${getUrl(error.response.config)}:`,
          "color: #a71d5d; font-weight: bold",
          error.response
        );
      }
      return Promise.reject(error);
    }
  );
};
