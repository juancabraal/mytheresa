import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PageWrapper from "../components/pageWrapper";

const HomePage = lazy(() => import("../pages/home"));
const DetailPage = lazy(() => import("../pages/detail"));
const WishPage = lazy(() => import("../pages/wish"));
const NotFoundPage = lazy(() => import("../pages/notFound"));

const MainRouter = () => {
  const APP_URL = process.env.APP_URL;
  return (
    <PageWrapper>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path={APP_URL} element={<HomePage />} />
          <Route
            path={`${APP_URL}detail/:category/:id`}
            element={<DetailPage />}
          />
          <Route path={`${APP_URL}wish-list`} element={<WishPage />} />
          <Route path={`*`} element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </PageWrapper>
  );
};

export default MainRouter;
