import React from 'react';
import './header-nav.styles.scss'
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg';
import { Link} from 'react-router-dom';
import {ReactComponent as LikeButton} from '../../assets/icons8-heart-outline-24.png';
import {auth} from '../../firebase/firebase.utils';
const Navigation = ({currentUser}) => (
    <div className="header-nav">
        <Link to="/">
            <Logo className="logo"/>
        </Link>
        <div className="nav-items">
        <Link className="nav-item nav-item-ltr" to="/shop">
            SHOP
        </Link>
        <Link className="nav-item nav-item-ltr" to="/contact">
            CONTACT
        </Link>
        {currentUser===null ? <Link className="nav-item nav-item-ltr" to="/signin">SIGNIN</Link> :
                                 <div className="nav-item nav-item-ltr" onClick={()=>auth.signOut()}>SIGNOUT</div>}
         </div>
    </div>
)
export default Navigation;