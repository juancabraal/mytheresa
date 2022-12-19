import Axios from "axios";
import { applyAuthInterceptor } from "./authInterceptor";

export const axios = Axios.create({
  responseType: "json",
});

applyAuthInterceptor(axios);
