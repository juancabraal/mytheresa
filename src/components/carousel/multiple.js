import { Children } from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const CarouselMultipleItens = ({ children }) => {
  const arrayChildren = Children.toArray(children);
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={24}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation]}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
    >
      {Children.map(arrayChildren, (child) => (
        <SwiperSlide key={child.props.movieid}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselMultipleItens;
