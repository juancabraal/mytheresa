import { useContext, useEffect, useMemo } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";

import { axiosFetcher } from "../../api/fetchers";
import CATEGORIES from "../../consts/categories";
import { getApplicationRoute } from "../../utils/route";
import MovieInformation from "../../components/MovieInformation";
import MoviePoster from "../../components/MoviePoster";
import FadeUp from "../../components/animations/FadeUp";
import MovieBackdrop from "../../components/MovieBackdrop";
import Fade from "../../components/animations/Fade";
import Button from "../../components/button";
import { WishListContext } from "../../context/WishListContext";
import "./style.scss";
import Tap from "../../components/animations/Tap";

const DetailPage = () => {
  const { addItemToList, removeItemFromList, isItemInList } =
    useContext(WishListContext);
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

  const isOnList = isItemInList(movieDetail.id);

  return (
    <div className={`movie-detail movie-${category}-detail`}>
      <Fade>
        <MovieBackdrop imageUrl={movieDetail.backdrop_path} />
      </Fade>
      <div className="movie-content">
        <FadeUp transition={{ duration: 0.5, delay: 0.5 }}>
          <MoviePoster posterUrl={movieDetail.poster_path} />
        </FadeUp>
        <FadeUp transition={{ duration: 0.5, delay: 0.8 }}>
          <MovieInformation
            movieDetail={movieDetail}
            movieAction={
              <Tap>
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
              </Tap>
            }
          />
        </FadeUp>
      </div>
    </div>
  );
};

export default DetailPage;
