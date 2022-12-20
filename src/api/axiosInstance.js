import Axios from "axios";
import { applyAuthInterceptor } from "./authInterceptor";
import { applyLogInterceptor } from "./logInterceptor";

export const axios = Axios.create({
  responseType: "json",
  baseURL: process.env.API_URL,
});

applyAuthInterceptor(axios);
if (process.env.NODE_ENV === "development") {
  applyLogInterceptor(axios);
}
