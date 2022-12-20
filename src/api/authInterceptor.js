export const applyAuthInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `bearer ${process?.env?.API_TOKEN}`;
    return config;
  });
};
