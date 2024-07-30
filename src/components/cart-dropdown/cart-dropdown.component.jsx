import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.style.scss";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropdowm = () => {
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/checkout");
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={checkoutHandler}>Check Out</Button>
    </div>
  );
};
export default CartDropdowm;
