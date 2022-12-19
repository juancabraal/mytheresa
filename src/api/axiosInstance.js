import Axios from "axios";
import envs from "../utils/envs";
import { applyAuthInterceptor } from "./authInterceptor";

export const axios = Axios.create({
  responseType: "json",
  baseURL: envs.API_URL,
});

applyAuthInterceptor(axios);
