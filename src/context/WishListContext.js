import { createContext, useEffect, useState } from "react";

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  const getWishListFromMemory = () => {
    const list = localStorage.getItem("mytheresaWishList");
    if (list) {
      setWishList(JSON.parse(list));
    }
  };

  const updateWishtListOnMemory = (list) => {
    localStorage.setItem("mytheresaWishList", JSON.stringify(list));
  };

  const addItemToList = (item, category) => {
    const list = [...wishList, { ...item, category }];
    updateWishtListOnMemory(list);
    setWishList(list);
  };

  const removeItemFromList = (itemId) => {
    const list = [...wishList].filter((value) => value.id !== itemId);
    updateWishtListOnMemory(list);
    setWishList(list);
  };

  const isItemInList = (itemId) => {
    return Boolean(wishList.find((value) => value.id === itemId));
  };

  useEffect(() => {
    getWishListFromMemory();
  }, []);

  const value = {
    wishList,
    setWishList,
    addItemToList,
    removeItemFromList,
    isItemInList,
  };
  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};
