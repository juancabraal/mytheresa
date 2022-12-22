import { useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import { WishListProvider } from "./context/WishListContext";

import MainRouter from "./router";
import { normalizeWindowHeight } from "./utils/heightDimension";
import { composeWrappers } from "./utils/reactUtils";

import "./i18n";

const App = () => {
  const Providers = useMemo(() => {
    return composeWrappers([BrowserRouter, {}], [WishListProvider, {}]);
  });
  normalizeWindowHeight();
  return (
    <Providers>
      <MainRouter />
    </Providers>
  );
};

export default App;
