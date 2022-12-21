import { useContext } from "react";
import { FiCalendar } from "react-icons/fi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import StarRatings from "react-star-ratings";

import { formatDate } from "../../utils/date";
import { getStarsRealValue, isWhatPercentOf } from "../../utils/number";
import Button from "../../components/button";
import { convertToCurrency } from "../../utils/converter";
import { WishListContext } from "../../context/WishListContext";

import "./style.scss";

const MovieInformation = ({
  movieDetail,
  category,
  showDescription = true,
  showRevenue = true,
  showExternalSite = true,
  movieAction,
}) => {
  const { addItemToList, removeItemFromList, isItemInList } =
    useContext(WishListContext);

  const revenuePercent = isWhatPercentOf(
    movieDetail.budget,
    movieDetail.revenue
  ).toFixed(2);

  const isOnList = isItemInList(movieDetail.id);

  return (
    <div className="movie-information">
      <div className="title">
        <h2>{movieDetail.title}</h2>
        {movieAction || (
          <Button
            onClick={() =>
              isOnList
                ? removeItemFromList(movieDetail.id)
                : addItemToList(movieDetail, category)
            }
            className="wish-button"
          >
            {isOnList ? (
              <FaHeart fontSize={25} className="wish-added" />
            ) : (
              <FaRegHeart fontSize={25} className="wish-add" />
            )}
          </Button>
        )}
      </div>
      <ul className="list-info">
        <li className="date">
          <FiCalendar />
          <h4>{formatDate(movieDetail.release_date)}</h4>
        </li>
        <li className="ratio">
          <StarRatings
            rating={getStarsRealValue(movieDetail.vote_average)}
            numberOfStars={5}
            starRatedColor="#f39c12"
            starSpacing="1px"
            starDimension="16px"
          />
          <h4>{`${movieDetail.vote_average} (${movieDetail.vote_count})`}</h4>
        </li>
      </ul>
      {showDescription && (
        <div className="description">
          <p>{movieDetail.overview}</p>
        </div>
      )}
      {showRevenue && (
        <ul className="list-info">
          <li>
            <p>Budget</p>
            <h4>{convertToCurrency(movieDetail.budget)}</h4>
          </li>
          <li>
            <p>Revenue</p>
            <h4>
              {convertToCurrency(movieDetail.revenue)}
              <span
                className={revenuePercent > 0 ? "pos-revenue" : "neg-revenue"}
              >{` (${
                revenuePercent > 0 ? `+${revenuePercent}` : revenuePercent
              }%)`}</span>
            </h4>
          </li>
        </ul>
      )}
      {showExternalSite && (
        <div className="external-site">
          <a href={movieDetail.homepage} target="_blank">
            {movieDetail.homepage}
          </a>
        </div>
      )}
    </div>
  );
};

export default MovieInformation;
