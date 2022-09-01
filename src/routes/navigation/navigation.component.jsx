import {
  NavigationContainer, 
  LogoContainer,
  NavLinks,
  NavLink
} from './navigation.styles';

import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)
    
    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to="/">
            <CrownLogo className="logo" />
          </LogoContainer>
          <NavLinks>
            <NavLink to="/shop">
              SHOP
            </NavLink>
            <NavLink to="/about">
              CONTACT
            </NavLink>
            {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                {' '}
                SIGN OUT{' '}
              </NavLink>
            ) : (
              <Link className="auth" to="/auth">
                SIGN IN
              </Link>
            )}
              <CartIcon />
          </NavLinks>
          {
            isCartOpen && <CartDropdown />
          }
          
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
};

export default Navigation;

