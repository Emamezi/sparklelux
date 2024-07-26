import Button from "../button/button.component";
import "./cart-dropdown.style.scss";

const CartDropdowm = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>CheckOut</Button>
    </div>
  );
};
export default CartDropdowm;
