import Axios from "axios";
import { applyAuthInterceptor } from "./authInterceptor";
import { applyLogInterceptor } from "./logInterceptor";

export const axios = Axios.create({
  responseType: "json",
  baseURL: "https://api.themoviedb.org/3/",
});

applyAuthInterceptor(axios);
if (process.env.NODE_ENV === "development") {
  applyLogInterceptor(axios);
}
