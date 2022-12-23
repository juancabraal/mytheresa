import { useTranslation } from "react-i18next";

import Carousel from "../../components/carousel";
import CATEGORIES from "../../consts/categories";
import "./style.scss";

const HomePage = () => {
  const { t, i18n } = useTranslation();

  const languageQuery = `language=${i18n.resolvedLanguage}`;

  return (
    <div className="home-container">
      <div className="movie-big-section" id={CATEGORIES.DISCOVER.toLowerCase()}>
        <Carousel
          category={CATEGORIES.DISCOVER.toLowerCase()}
          endpoint={`discover/movie?${languageQuery}`}
          isSingle
          itemCount={5}
          errorMessage={t("movieListDiscoverFailure")}
        />
      </div>
      <div
        className="movie-list-section"
        id={CATEGORIES.TRENDING.toLowerCase()}
      >
        <div className="list-title">{t("homeSectionTrending")}</div>
        <Carousel
          category={CATEGORIES.TRENDING.toLowerCase()}
          endpoint={`movie/popular?${languageQuery}`}
          itemCount={20}
          errorMessage={t("movieListPopularFailure")}
        />
      </div>
      <div
        className="movie-list-section"
        id={CATEGORIES["TOP-RATED"].toLowerCase()}
      >
        <div className="list-title">{t("homeSectionTopRated")}</div>
        <Carousel
          category={CATEGORIES["TOP-RATED"].toLowerCase()}
          endpoint={`movie/top_rated?${languageQuery}`}
          itemCount={20}
          errorMessage={t("movieListTopRatedFailure")}
        />
      </div>
    </div>
  );
};

export default HomePage;
