import { useContext, useEffect, useMemo } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";

import { axiosFetcher } from "../../api/fetchers";
import CATEGORIES from "../../consts/categories";
import { getApplicationRoute } from "../../utils/route";
import MoviePoster from "./poster";
import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/button";
import { WishListContext } from "../../context/WishListContext";
import Tap from "../../components/animations/Tap";
import Accordion from "../../components/animations/accordion";
import MovieInfos from "./movieInfos";
import Carousel from "../../components/carousel";
import { useDimensions } from "../../utils/hooks/useDimensions";
import MovieInfoList from "./infoList";
import Loading from "../../components/loading";

import "../home/style.scss";
import "./style.scss";

const DetailPage = () => {
  const { t, i18n } = useTranslation();
  const { addItemToList, removeItemFromList, isItemInList } =
    useContext(WishListContext);
  const { category, id } = useParams();
  const navigate = useNavigate();
  const [windowWidth] = useDimensions();

  const isMobile = windowWidth <= 1024;
  const languageQuery = `language=${i18n.resolvedLanguage}`;

  const { data: response, isLoading } = useSWR(
    `movie/${id}?${languageQuery}`,
    axiosFetcher
  );

  const movieDetail = useMemo(() => {
    return response?.data || {};
  }, [response]);

  useEffect(() => {
    if (!Object.keys(CATEGORIES).includes(String(category).toUpperCase())) {
      navigate(getApplicationRoute("/"));
    }
  }, [category]);

  const isOnList = isItemInList(movieDetail.id);

  return (
    <AnimatePresence>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={`home-container movie-detail movie-${category}-detail`}>
          <div className="movie-principal-info-container">
            {!isMobile && (
              <FadeUp
                animationKey="Poster"
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <MoviePoster posterUrl={movieDetail.poster_path} />
              </FadeUp>
            )}
            <div className="movie-content">
              <FadeUp
                animationKey="Title"
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="title">
                  <h2>{movieDetail.title}</h2>
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
                </div>
              </FadeUp>
              <FadeUp
                animationKey="Genre"
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="movie-info-list genre">
                  <MovieInfoList
                    infoList={movieDetail.genres}
                    itemDescription={({ name }) => name}
                  />
                </div>
              </FadeUp>
              {isMobile && (
                <FadeUp
                  animationKey="Poster"
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <MoviePoster posterUrl={movieDetail.poster_path} />
                </FadeUp>
              )}
              <FadeUp
                animationKey="sinopse"
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="sinopse">
                  <Accordion title="Sinopse">{movieDetail.overview}</Accordion>
                </div>
              </FadeUp>
              <FadeUp
                animationKey="Creators"
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="movie-info-list">
                  <Accordion title="Creators">
                    <MovieInfos
                      endpoint={`/movie/${id}/credits?${languageQuery}`}
                    >
                      {({ crew }) => (
                        <MovieInfoList
                          infoList={crew}
                          itemDescription={(item) =>
                            `${item.name} (${item.department})`
                          }
                        />
                      )}
                    </MovieInfos>
                  </Accordion>
                </div>
              </FadeUp>
              <FadeUp
                animationKey="Stars"
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="movie-info-list">
                  <Accordion title="Stars">
                    <MovieInfos
                      endpoint={`/movie/${id}/credits?${languageQuery}`}
                    >
                      {({ cast }) => (
                        <MovieInfoList
                          infoList={cast}
                          itemDescription={(item) =>
                            `${item.name} (${item.character})`
                          }
                        />
                      )}
                    </MovieInfos>
                  </Accordion>
                </div>
              </FadeUp>
            </div>
          </div>
          <div className="movie-content">
            <FadeUp
              animationKey="reviews"
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="movie-info-list review">
                <Accordion title="Reviews">
                  <MovieInfos
                    endpoint={`/movie/${id}/reviews?${languageQuery}`}
                  >
                    {({ results }) => (
                      <MovieInfoList
                        infoList={results}
                        uniqueBy=""
                        count={2}
                        itemDescription={(item) => (
                          <div className="review-item">
                            <div className="title">
                              <h4>{item.author}</h4>
                            </div>
                            <div className="comment">{item.content}</div>
                          </div>
                        )}
                      />
                    )}
                  </MovieInfos>
                </Accordion>
              </div>
            </FadeUp>
            <FadeUp
              animationKey="recommendations"
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="movie-list-section">
                <div className="list-title">{t("movieRecommendations")}</div>
                <MovieInfos
                  endpoint={`/movie/${id}/recommendations?${languageQuery}`}
                  defaultReturn={[]}
                >
                  {({ results }) => (
                    <Carousel
                      category={category}
                      customMovieList={results}
                      endpoint={null}
                      itemCount={5}
                    />
                  )}
                </MovieInfos>
              </div>
            </FadeUp>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DetailPage;
