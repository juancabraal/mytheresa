import { axios } from "./axiosInstance";

const extractConfigFromConfigOrMethod = (config = {}) => {
  return typeof config === "string" ? { method: config } : config;
};

export const axiosFetcher = (url, configOrMethod) => {
  return axios(url, extractConfigFromConfigOrMethod(configOrMethod));
};
