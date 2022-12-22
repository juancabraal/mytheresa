import { useTranslation } from "react-i18next";

import Carousel from "../../components/carousel";
import CATEGORIES from "../../consts/categories";
import "./style.scss";

const HomePage = () => {
  const { t, i18n } = useTranslation();

  const languageQuery = `language=${i18n.resolvedLanguage}`;

  return (
    <div className="home-container">
      <div className="movie-big-section">
        <Carousel
          category={CATEGORIES.DISCOVER.toLowerCase()}
          endpoint={`discover/movie?${languageQuery}`}
          isSingle
          itemCount={5}
        />
      </div>
      <div className="movie-list-section">
        <div className="list-title">{t("homeSectionTrending")}</div>
        <Carousel
          category={CATEGORIES.TRENDING.toLowerCase()}
          endpoint={`movie/popular?${languageQuery}`}
          itemCount={20}
        />
      </div>
      <div className="movie-list-section">
        <div className="list-title">{t("homeSectionTopRated")}</div>
        <Carousel
          category={CATEGORIES["TOP-RATED"].toLowerCase()}
          endpoint={`movie/top_rated?${languageQuery}`}
          itemCount={20}
        />
      </div>
    </div>
  );
};

export default HomePage;
