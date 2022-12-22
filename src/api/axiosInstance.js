import Axios from "axios";
import { applyAuthInterceptor } from "./authInterceptor";
import { applyLogInterceptor } from "./logInterceptor";
import { applyNotificationInterceptor } from "./notificationInterceptor";

export const axios = Axios.create({
  responseType: "json",
  baseURL: "https://api.themoviedb.org/3/",
  validateStatus: (status) => {
    return status >= 200 && status < 400;
  },
});

applyAuthInterceptor(axios);
applyNotificationInterceptor(axios);
if (process.env.NODE_ENV === "development") {
  applyLogInterceptor(axios);
}
