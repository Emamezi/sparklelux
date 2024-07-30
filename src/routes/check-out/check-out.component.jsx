import "./check-out.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckOut = () => {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span
              onClick={() => {
                addItemToCart(cartItem);
              }}
            >
              increment
            </span>
            <span>{quantity}</span>
            <span
              onClick={() => {
                removeItemToCart(cartItem);
              }}
            >
              decrement
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CheckOut;
