import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (cartItem) => {
    // setCartItems([...cartItems, cartItem]); 1. yol
    setCartItems((prevCart) => [
      ...prevCart,
      {
        ...cartItem,
        quantity: cartItem.quantity ? cartItem.quantity : 1,
      },
    ]);
  };

  const removeFromCart = (itemId) => {
    const filteredCartItems = cartItems.filter((cartItem) => {
      return cartItem._id !== itemId;
    });

    setCartItems(filteredCartItems);
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item._id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node,
};
