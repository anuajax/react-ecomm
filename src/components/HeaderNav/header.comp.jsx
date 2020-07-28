import React from 'react';
import './header.nav.styles.scss'
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg';
import { Link} from 'react-router-dom';
const Navigation = () => (
    <div className="header-nav">
        <Link to="/">
            <Logo className="logo"/>
        </Link>
        <div className="nav-items">
        <Link className="nav-item" to="/shop">
            SHOP
        </Link>
        <Link className="nav-item" to="/contact">
            CONTACT
        </Link>
         </div>
    </div>
)
export default Navigation;