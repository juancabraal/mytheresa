import { useContext, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";

import { axiosFetcher } from "../../api/fetchers";
import CATEGORIES from "../../consts/categories";
import { getApplicationRoute } from "../../utils/route";

import "./style.scss";
import MovieInformation from "../../components/MovieInformation";
import MoviePoster from "../../components/MoviePoster";
import FadeUp from "../../components/animations/FadeUp";
import MovieBackdrop from "../../components/MovieBackdrop";
import Fade from "../../components/animations/Fade";

const DetailPage = () => {
  const { category, id } = useParams();
  const CATEGORIES_KEYS = Object.keys(CATEGORIES);
  const navigate = useNavigate();

  const { data: response } = useSWR(`movie/${id}`, axiosFetcher);

  const movieDetail = useMemo(() => {
    return response?.data || {};
  }, [response]);

  useEffect(() => {
    if (!CATEGORIES_KEYS.includes(String(category).toUpperCase())) {
      navigate(getApplicationRoute("/not-found"));
    }
  }, [category]);

  return (
    <div className="movie-detail">
      <Fade>
        <MovieBackdrop imageUrl={movieDetail.backdrop_path} />
      </Fade>
      <div className="movie-content">
        <FadeUp transition={{ duration: 0.5, delay: 0.5 }}>
          <MoviePoster posterUrl={movieDetail.poster_path} />
        </FadeUp>
        <FadeUp transition={{ duration: 0.5, delay: 0.8 }}>
          <MovieInformation movieDetail={movieDetail} category={category} />
        </FadeUp>
      </div>
    </div>
  );
};

export default DetailPage;
