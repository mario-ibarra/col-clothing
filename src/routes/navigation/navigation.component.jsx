import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom"

import './navigation.styles.scss';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

const Navigation = () => {
    return (
      <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    <Link className="auth" to='/auth'>
                        SIGN IN
                    </Link>

                </div>
            </div>
        <Outlet />
      </Fragment>
    );
};

export default Navigation;

