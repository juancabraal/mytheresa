import { Children } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const CarouselSingleItem = ({ children }) => {
  const arrayChildren = Children.toArray(children);
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
    >
      {Children.map(arrayChildren, (child) => (
        <SwiperSlide key={child.props.movieid}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselSingleItem;
