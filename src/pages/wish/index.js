import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { WishListContext } from "../../context/WishListContext";
import Carousel from "../../components/carousel";

import "../home/style.scss";

const WishPage = () => {
  const { t } = useTranslation();
  const { wishList } = useContext(WishListContext);

  return (
    <div className="home-container">
      <div className="movie-list-section">
        <div className="list-title">{t("wishListTitle")}</div>
        <Carousel customMovieList={wishList} endpoint={null} itemCount={null} />
      </div>
    </div>
  );
};

export default WishPage;
