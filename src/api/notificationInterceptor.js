import { showNotification } from "../utils/notifications";
import { getErrorMessage } from "../utils/errors";

export const applyNotificationInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.response.use(undefined, (error) => {
    const config = error.config;
    const failureNotification = config.failureNotification;
    if (failureNotification) {
      const { message: customMessage } = failureNotification;
      showNotification({
        id: `${config.baseUrl}${config.url}`,
        type: "error",
        message: getErrorMessage(error, customMessage),
      });
    }
    return Promise.reject(error);
  });
};
