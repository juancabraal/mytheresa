import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { FiCalendar } from "react-icons/fi";
import StarRatings from "react-star-ratings";

import { axiosFetcher } from "../../api/fetchers";
import { formatDate } from "../../utils/date";
import { getStarsRealValue, isWhatPercentOf } from "../../utils/number";
import Button from "../../components/button";
import { convertToCurrency } from "../../utils/converter";
import { WishListContext } from "../../context/WishListContext";

import "./style.scss";

const DetailPage = () => {
  const { addItemToList, removeItemFromList, isItemInList } =
    useContext(WishListContext);
  const { category, id } = useParams();

  const { data: response } = useSWR(`movie/${id}`, axiosFetcher);

  const movieDetail = useMemo(() => {
    return response?.data || {};
  }, [response]);

  const revenuePercent = isWhatPercentOf(
    movieDetail.budget,
    movieDetail.revenue
  ).toFixed(2);

  const isOnList = isItemInList(movieDetail.id);

  return (
    <div className="movie-detail">
      <div
        className="movie-backdrop-image"
        style={{
          backgroundImage:
            movieDetail.backdrop_path &&
            `url("http://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}")`,
        }}
      />
      <div className="movie-content">
        <div className="movie-post-image">
          <img
            src={
              movieDetail.poster_path &&
              `http://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`
            }
          />
        </div>
        <div className="movie-information">
          <div className="title">
            <h2>{movieDetail.title}</h2>
            <Button
              variant="contained"
              onClick={() =>
                isOnList
                  ? removeItemFromList(movieDetail.id)
                  : addItemToList(movieDetail, category)
              }
            >
              {isOnList ? "Remove from list" : "Add to list"}
            </Button>
          </div>
          <div className="date-ratio-info">
            <div className="date">
              <FiCalendar />
              <p>{formatDate(movieDetail.release_date)}</p>
            </div>
            <div className="ratio">
              <StarRatings
                rating={getStarsRealValue(movieDetail.vote_average)}
                numberOfStars={5}
                starRatedColor="#f39c12"
                starSpacing="1px"
                starDimension="16px"
              />
              <p>{`${movieDetail.vote_average} (${movieDetail.vote_count})`}</p>
            </div>
          </div>
          <div className="description">
            <p>{movieDetail.overview}</p>
          </div>
          <ul className="amount-values">
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
          <div className="external-site">
            <a href={movieDetail.homepage} target="_blank">
              {movieDetail.homepage}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
