import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});
const addCartItem = (cartItems, productToAdd) => {
  //check if item exists in the cart
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);

  //if it does, update the item quantity
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...cartItems, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
  //return new array with modified cartitems or new cart item
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
