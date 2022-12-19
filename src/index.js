import React from "react";
import ReactDOM from "react-dom/client";
import log from "loglevel";
import prefix from "loglevel-plugin-prefix";

import App from "./App";
import envs from "./utils/envs";

prefix.reg(log);
prefix.apply(log);
log.enableAll();
log.setDefaultLevel(envs?.isProd ? log.levels.ERROR : log.levels.INFO);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
