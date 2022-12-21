import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import AnimatedList from "../../components/animations/AnimatedList";
import Button from "../../components/button";
import MovieInformation from "../../components/MovieInformation";
import MoviePoster from "../../components/MoviePoster";
import { WishListContext } from "../../context/WishListContext";
import { getApplicationRoute } from "../../utils/route";

import "./style.scss";

const WishPage = () => {
  const { wishList, removeItemFromList } = useContext(WishListContext);
  const navigate = useNavigate();

  return (
    <div className="wish-list-container">
      <div className="title">
        <h2>Wish List</h2>
      </div>
      <div className="list-container">
        <AnimatedList>
          {wishList.map((movie) => (
            <div className="movie-item" key={movie.id} movieId={movie.id}>
              <Button
                className="movie-post-button"
                onClick={() =>
                  navigate(
                    getApplicationRoute(`/detail/${movie.category}/${movie.id}`)
                  )
                }
              >
                <MoviePoster posterUrl={movie.poster_path} />
              </Button>
              <MovieInformation
                movieDetail={movie}
                movieAction={
                  <Button
                    className="wish-button"
                    onClick={() => removeItemFromList(movie.id)}
                  >
                    <FaHeart fontSize={25} className="wish-added" />
                  </Button>
                }
                showDescription={false}
                showExternalSite={false}
                showRevenue={false}
              />
            </div>
          ))}
        </AnimatedList>
      </div>
    </div>
  );
};

export default WishPage;
