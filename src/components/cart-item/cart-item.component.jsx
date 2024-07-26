import "./cart-item.style.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;
  return (
    <div>
      <h2>{name}</h2>
      <p2>{quantity}</p2>
    </div>
  );
};

export default CartItem;
