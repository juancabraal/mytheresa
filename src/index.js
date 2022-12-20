import React from "react";
import ReactDOM from "react-dom/client";
import log from "loglevel";
import prefix from "loglevel-plugin-prefix";

import App from "./App";

import "./index.scss";

prefix.reg(log);
prefix.apply(log);
log.enableAll();
log.setDefaultLevel(
  process?.env?.NODE_ENV !== "development" ? log.levels.ERROR : log.levels.INFO
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
