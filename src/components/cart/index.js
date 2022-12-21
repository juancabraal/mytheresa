import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

import { WishListContext } from "../../context/WishListContext";
import Button from "../button";

import "./style.scss";
import { getApplicationRoute } from "../../utils/route";

const variants = {
  zoom: { scale: [0.5, 1, 1.5, 1] },
};

const Cart = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const { wishList } = useContext(WishListContext);

  useEffect(() => {
    if (wishList.length > 0) {
      controls.start("zoom");
    }
  }, [wishList]);

  return (
    <div className="cart-wrapper">
      <Button
        className="cart-button-action"
        onClick={() => navigate(getApplicationRoute("/wish-list"))}
      >
        <FaHeart fontSize={25} />
        <AnimatePresence>
          {wishList.length > 0 && (
            <motion.div
              className="cart-badge"
              variants={variants}
              animate={controls}
              exit={{
                scale: 0,
                transition: { duration: 0.3 },
              }}
            >
              {wishList.length}
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </div>
  );
};

export default Cart;
