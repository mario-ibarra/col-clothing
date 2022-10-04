import {
  NavigationContainer, 
  LogoContainer,
  NavLinks,
  NavLink
} from './navigation.styles';

import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/user/user.selector';
import { selectIsCartOpen } from '../../features/cart/cart.selector';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import { signOutStart } from '../../features/user/userSlice';
// import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state=>state.user.currentUser);
 
 const signOutUser = () => {
  dispatch(signOutStart())
 }
  const isCartOpen = useSelector(selectIsCartOpen)


    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to="/">
            <CrownLogo className="logo" />
          </LogoContainer>
          <NavLinks>
            <NavLink to="/shop">SHOP</NavLink>
            <NavLink to="/about">CONTACT</NavLink>

            {currentUser ? (
              <NavLink as="span" onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <Link className="auth" to="/auth">
                SIGN IN
              </Link>
            )}
            {/* <Link className="auth" to="/auth">
              SIGN IN
            </Link> */}
            <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
};

export default Navigation;

