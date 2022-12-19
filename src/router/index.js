import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import envs from "../utils/envs";

const HomePage = lazy(() => import("../pages/home"));
const DetailPage = lazy(() => import("../pages/detail"));
const WishPage = lazy(() => import("../pages/wish"));
const NotFoundPage = lazy(() => import("../pages/notFound"));

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={envs.APP_URL} element={<HomePage />} />
        <Route
          path={`${envs.APP_URL}/detail/:category/:slug`}
          element={<DetailPage />}
        />
        <Route path={`${envs.APP_URL}/wish-list`} element={<WishPage />} />
        <Route path={`*`} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
