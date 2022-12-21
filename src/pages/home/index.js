import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../../components/carousel";
import CATEGORIES from "../../consts/categories";
import "./style.scss";
const HomePage = () => {
  const { search: urlSearch } = useLocation();
  useEffect(() => {
    const slideSection = urlSearch.slice(1).toUpperCase();
    if (
      urlSearch &&
      urlSearch.startsWith("?") &&
      Object.keys(CATEGORIES).indexOf(slideSection) >= 0
    ) {
      const slideElement = document.getElementById(slideSection);

      if (slideElement) {
        slideElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [urlSearch]);
  return (
    <div className="home-container">
      <div className="movie-section" id={CATEGORIES.POPULAR}>
        <Carousel category={CATEGORIES.POPULAR} />
      </div>
      <div className="movie-section" id={CATEGORIES.TOP_RATED}>
        <Carousel category={CATEGORIES.TOP_RATED} />
      </div>
      <div className="movie-section" id={CATEGORIES.UPCOMING}>
        <Carousel category={CATEGORIES.UPCOMING} />
      </div>
    </div>
  );
};

export default HomePage;
