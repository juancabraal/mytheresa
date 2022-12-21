import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PageWrapper from "../components/pageWrapper";
import { getApplicationRoute } from "../utils/route";

const HomePage = lazy(() => import("../pages/home"));
const DetailPage = lazy(() => import("../pages/detail"));
const WishPage = lazy(() => import("../pages/wish"));
const NotFoundPage = lazy(() => import("../pages/notFound"));

const MainRouter = () => {
  return (
    <PageWrapper>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path={getApplicationRoute()} element={<HomePage />} />
          <Route
            path={getApplicationRoute("/detail/:category/:id")}
            element={<DetailPage />}
          />
          <Route
            path={getApplicationRoute("/wish-list")}
            element={<WishPage />}
          />
          <Route path={`*`} element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </PageWrapper>
  );
};

export default MainRouter;
