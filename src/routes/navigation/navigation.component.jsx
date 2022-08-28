import './navigation.styles.scss';

import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CardDropdown from '../../components/card-dropdown/card-dropdown.component';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)
    
    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to="/">
            <CrownLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            <Link className="nav-link" to="/about">
              CONTACT
            </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                {' '}
                SIGN OUT{' '}
              </span>
            ) : (
              <Link className="auth" to="/auth">
                SIGN IN
              </Link>
            )}
              <CartIcon />
          </div>
          {
            isCartOpen && <CardDropdown />
          }
        </div>
        <Outlet />
      </Fragment>
    );
};

export default Navigation;

