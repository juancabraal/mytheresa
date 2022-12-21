import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import MovieItem from "../../components/movieItem";
import { WishListContext } from "../../context/WishListContext";

import "./style.scss";

const WishPage = () => {
  const { wishList, removeItemFromList } = useContext(WishListContext);
  const navigate = useNavigate();
  const APP_URL = process.env.APP_URL;

  return (
    <div className="wish-list-container">
      <div className="title">
        <h2>Wish List</h2>
      </div>
      <div className="list-container">
        {wishList.map((value) => (
          <MovieItem
            key={value.id}
            movie={value}
            onClick={() =>
              navigate(`${APP_URL}detail/${value.category}/${value.id}`)
            }
            onRemove={() => removeItemFromList(value.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default WishPage;
