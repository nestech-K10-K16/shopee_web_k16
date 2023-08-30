import { useState, useEffect } from "react";
import { cartItemsData } from "data/cartItemsData";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartItems(cartItemsData);
    calculateTotalPrice(cartItemsData);
  }, []);

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  const removeCartItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
  };

  return {
    cartItems,
    removeCartItem,
    totalPrice,
  };
};
