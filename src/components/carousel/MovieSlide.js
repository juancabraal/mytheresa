import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { getApplicationRoute } from "../../utils/route";
import MoviePoster from "../MoviePoster";
import MovieBackdrop from "../MovieBackdrop";
import MovieInformation from "../MovieInformation";
import FadeUp from "../animations/FadeUp";
import Fade from "../animations/Fade";
import Button from "../../components/button";

const posterVariations = {
  slideUp: { y: 0, opacity: 1 },
};

const informationVariations = {
  enter: { opacity: 1 },
};

const MovieSlide = ({ movie, category, isActive }) => {
  const navigate = useNavigate();
  const posterControls = useAnimation();
  const informationControls = useAnimation();

  useEffect(() => {
    if (isActive) {
      posterControls.start("slideUp");
      informationControls.start("enter");
    }
  }, [isActive]);

  return (
    <div className="movie-slide">
      <MovieBackdrop imageUrl={movie.backdrop_path} />
      <div className="movie-content">
        <FadeUp
          variants={posterVariations}
          animate={posterControls}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <MoviePoster posterUrl={movie.poster_path} />
        </FadeUp>
        <Fade
          variants={informationVariations}
          animate={informationControls}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <MovieInformation
            movieDetail={movie}
            showRevenue={false}
            showExternalSite={false}
            movieAction={
              <Button
                variant="contained"
                onClick={() =>
                  navigate(
                    getApplicationRoute(
                      `/detail/${category.toLowerCase()}/${movie.id}`
                    )
                  )
                }
                className="more-info-btn"
              >
                More info
              </Button>
            }
          />
        </Fade>
      </div>
    </div>
  );
};

export default MovieSlide;
