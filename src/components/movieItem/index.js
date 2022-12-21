import StarRatings from "react-star-ratings";
import { FiCalendar } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

import Button from "../button";
import { formatDate } from "../../utils/date";
import { getStarsRealValue } from "../../utils/number";

import "./style.scss";

const MovieItem = ({ movie, onRemove, onClick }) => {
  return (
    <div className="movie-item">
      <Button className="movie-post-image" onClick={onClick}>
        <img
          src={
            movie.poster_path &&
            `http://image.tmdb.org/t/p/w500/${movie.poster_path}`
          }
        />
      </Button>
      <div className="movie-information">
        <div className="title">
          <Button onClick={onClick}>
            <h2>{movie.title}</h2>
          </Button>
          <Button className="wish-button" onClick={onRemove}>
            <FaHeart fontSize={25} className="wish-added" />
          </Button>
        </div>
        <div className="date-ratio-info">
          <div className="date">
            <FiCalendar />
            <p>{formatDate(movie.release_date)}</p>
          </div>
          <div className="ratio">
            <StarRatings
              rating={getStarsRealValue(movie.vote_average)}
              numberOfStars={5}
              starRatedColor="#f39c12"
              starSpacing="1px"
              starDimension="16px"
            />
            <p>{`${movie.vote_average} (${movie.vote_count})`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
