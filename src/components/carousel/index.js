import { useMemo, useState } from "react";
import useSWRInfinite from "swr/infinite";
import { Navigation, Pagination, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiCalendar } from "react-icons/fi";
import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router-dom";

import { axiosFetcher } from "../../api/fetchers";
import { formatDate } from "../../utils/date";
import Button from "../../components/button";
import { getStarsRealValue } from "../../utils/number";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.scss";

const Carousel = ({ category }) => {
  const navigate = useNavigate();
  const APP_URL = process.env.APP_URL;
  const {
    data: response,
    isValidating,
    size,
    setSize,
  } = useSWRInfinite(
    (index) =>
      `movie/${String(category).toLowerCase()}?${new URLSearchParams({
        page: index + 1,
      })}`,
    axiosFetcher
  );

  const movieList = useMemo(() => {
    return response
      ? [].concat(...response.map((value) => value.data.results))
      : [];
  }, [response]);

  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, EffectCreative]}
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      onSlideChange={(swiper) => {
        if (swiper.activeIndex === movieList.length - 2 && !isValidating) {
          setSize(size + 1);
        }
      }}
      className="movie-slider"
    >
      {movieList.map((value) => (
        <SwiperSlide key={value.id}>
          <div className="movie-slide">
            <div
              className="movie-backdrop-image"
              style={{
                backgroundImage: `url("http://image.tmdb.org/t/p/w500/${value.backdrop_path}")`,
              }}
            />
            <div className="movie-content">
              <div className="movie-post-image">
                <img
                  src={`http://image.tmdb.org/t/p/w500/${value.poster_path}`}
                />
              </div>
              <div className="movie-information">
                <div className="title">
                  <h3>{value.title}</h3>
                  <Button
                    variant="contained"
                    onClick={() =>
                      navigate(
                        `${APP_URL}detail/${category.toLowerCase()}/${value.id}`
                      )
                    }
                  >
                    More info
                  </Button>
                </div>
                <div className="date-ratio-info">
                  <div className="date">
                    <FiCalendar />
                    <p>{formatDate(value.release_date)}</p>
                  </div>
                  <div className="ratio">
                    <StarRatings
                      rating={getStarsRealValue(value.vote_average)}
                      numberOfStars={5}
                      starRatedColor="#f39c12"
                      starSpacing="1px"
                      starDimension="16px"
                    />
                    <p>{`${value.vote_average} (${value.vote_count})`}</p>
                  </div>
                </div>
                <div className="description">
                  <p>{value.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
