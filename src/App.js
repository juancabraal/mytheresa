import { useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import { WishListProvider } from "./context/WishListContext";
import { ToastContainer } from "react-toastify";

import MainRouter from "./router";
import { normalizeWindowHeight } from "./utils/heightDimension";
import { composeWrappers } from "./utils/reactUtils";

import "react-toastify/dist/ReactToastify.css";

import "./i18n";

const App = () => {
  const Providers = useMemo(() => {
    return composeWrappers([BrowserRouter, {}], [WishListProvider, {}]);
  });
  normalizeWindowHeight();
  return (
    <Providers>
      <MainRouter />
      <ToastContainer />
    </Providers>
  );
};

export default App;
