import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import "./navigation.style.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cartIcon/cart-icon.component";
import CartDropdowm from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo" to="/">
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdowm />}
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
