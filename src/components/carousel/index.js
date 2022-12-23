import { useMemo } from "react";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";

import { axiosFetcher } from "../../api/fetchers";
import { getStarsRealValue } from "../../utils/number";
import { getApplicationRoute } from "../../utils/route";
import StarRatings from "react-star-ratings";
import { formatDate } from "../../utils/date";
import Button from "../button";
import CarouselMultipleItens from "./multiple";
import CarouselSingleItem from "./single";
import Loading from "../loading";

const CarouselSelector = ({ isSingle, movieList, onItemClicked, category }) => {
  if (isSingle) {
    return (
      <CarouselSingleItem>
        {movieList.map((movie, index) => (
          <Button
            key={movie.id}
            className="movie-item"
            style={{
              backgroundImage: `url("http://image.tmdb.org/t/p/w500/${movie.poster_path}")`,
            }}
            onClick={() => onItemClicked(movie)}
            movieid={movie.id}
            data-testid={`movie-${category || movie.category}-${index}`}
          >
            <div className="movie-title">{movie.title}</div>
          </Button>
        ))}
      </CarouselSingleItem>
    );
  }

  return (
    <CarouselMultipleItens>
      {movieList.map((movie, index) => (
        <Button
          key={movie.id}
          className="movie-item"
          style={{
            backgroundImage: `url("http://image.tmdb.org/t/p/w500/${movie.poster_path}")`,
          }}
          onClick={() => onItemClicked(movie)}
          movieid={movie.id}
          data-testid={`movie-${category || movie.category}-${index}`}
        >
          <div className="movie-info">
            <div className="title">
              <h4>{movie.title || movie.name}</h4>
            </div>
            <div className="date-star-rating">
              <p>{formatDate(movie.release_date || movie.first_air_date)}</p>
              <StarRatings
                rating={getStarsRealValue(movie.vote_average)}
                numberOfStars={5}
                starSpacing="1px"
                starRatedColor="white"
                starEmptyColor="rgba(255,255,255, 0.5)"
                starDimension="13px"
              />
            </div>
          </div>
        </Button>
      ))}
    </CarouselMultipleItens>
  );
};

const Carousel = ({
  category,
  endpoint,
  customMovieList,
  isSingle = false,
  itemCount,
  errorMessage,
}) => {
  const navigate = useNavigate();
  const { data: response, isValidating } = useSWR(
    endpoint,
    axiosFetcher({ message: errorMessage })
  );

  const movieList = useMemo(() => {
    const arrayList = Array.from(
      response?.data?.results || customMovieList || []
    );

    if (itemCount) return arrayList.slice(0, itemCount);

    return arrayList;
  }, [response, customMovieList]);

  const onItemClicked = (movie) => {
    navigate(
      getApplicationRoute(`/detail/${category || movie.category}/${movie.id}`)
    );
  };

  return (
    <div>
      {isValidating ? (
        <Loading />
      ) : (
        <CarouselSelector
          isSingle={isSingle}
          movieList={movieList}
          onItemClicked={onItemClicked}
          category={category}
        />
      )}
    </div>
  );
};

export default Carousel;
