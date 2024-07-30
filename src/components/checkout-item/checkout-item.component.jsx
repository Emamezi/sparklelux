import { useContext } from "react";
import "./checkout-item.style.scss";
import { CartContext } from "../../contexts/cart.context";

const CheckOutItem = ({ checkoutItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(checkoutItem);
  const addItemHandler = () => addItemToCart(checkoutItem);
  const removeItemHandler = () => removeItemToCart(checkoutItem);
  const { imageUrl, name, price, quantity } = checkoutItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity ">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>

        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
