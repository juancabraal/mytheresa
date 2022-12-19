import envs from "../utils/envs";

export const applyAuthInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `bearer ${envs.API_TOKEN}`;
    return config;
  });
};
