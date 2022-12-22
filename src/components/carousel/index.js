import { useMemo } from "react";
import useSWRInfinite from "swr/infinite";
import { Navigation, Pagination, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { axiosFetcher } from "../../api/fetchers";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.scss";
import MovieSlide from "./MovieSlide";

const Carousel = ({ category }) => {
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
          {({ isActive }) => (
            <MovieSlide movie={value} category={category} isActive={isActive} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
