import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartImage } from "../../assets";
import { WishListContext } from "../../context/WishListContext";
import Button from "../button";
import "./style.scss";

const Cart = () => {
  const navigate = useNavigate();
  const { wishList } = useContext(WishListContext);
  const APP_URL = process.env.APP_URL;

  return (
    <div className="cart-wrapper">
      <Button
        className="cart-button-action"
        onClick={() => navigate(`${APP_URL}wish-list`)}
      >
        <img src={CartImage} />
        {wishList.length > 0 && (
          <div className="cart-badge">{wishList.length}</div>
        )}
      </Button>
    </div>
  );
};

export default Cart;
