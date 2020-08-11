import React from 'react';
import './header-nav.styles.scss'
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg';
import { Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect}  from 'react-redux';
import CartIcon from '../cart-Icon/cart-icon.component';
import CartDropdown from '../cart-DropDown/cart-dropdown';


import {selectCurrentUser} from '../../redux/selectors/user.selectors';
import {selectCartHidden}  from '../../redux/selectors/cart.selectors';


const Navigation = ({currentUser,hidden}) => (
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
                                 <CartIcon  />
         </div>
          { hidden ? null: <CartDropdown/> } 
    </div>
)
//advanced destructuring: state
const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
})
export default connect(mapStateToProps)(Navigation);
//mapStateToProps and connect will be written anywhere, if we want properties from reducers