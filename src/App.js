import { useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import { WishListProvider } from "./context/WishListContext";

import MainRouter from "./router";
import { composeWrappers } from "./utils/reactUtils";

const App = () => {
  const Providers = useMemo(() => {
    return composeWrappers([BrowserRouter, {}], [WishListProvider, {}]);
  });
  return (
    <Providers>
      <MainRouter />
    </Providers>
  );
};

export default App;
