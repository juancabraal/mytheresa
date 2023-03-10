import { axios } from "./axiosInstance";

const extractConfigFromConfigOrMethod = (config = {}) => {
  return typeof config === "string" ? { method: config } : config;
};

export const axiosFetcher = (failureNotification) => (url, configOrMethod) => {
  return axios(
    url,
    extractConfigFromConfigOrMethod({ ...configOrMethod, failureNotification })
  );
};
