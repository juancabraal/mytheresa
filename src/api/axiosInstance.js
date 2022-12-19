import Axios from "axios";
import envs from "../utils/envs";
import { applyAuthInterceptor } from "./authInterceptor";
import { applyLogInterceptor } from "./logInterceptor";

export const axios = Axios.create({
  responseType: "json",
  baseURL: envs.API_URL,
});

applyAuthInterceptor(axios);
if (envs.NODE_ENV === "development") {
  applyLogInterceptor(axios);
}
