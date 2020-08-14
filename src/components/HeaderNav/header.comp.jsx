import React from 'react';
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect}  from 'react-redux';
import CartIcon from '../cart-Icon/cart-icon.component';
import CartDropdown from '../cart-DropDown/cart-dropdown';

import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink,OptionDiv} from './header.styles';
import {selectCurrentUser} from '../../redux/selectors/user.selectors';
import {selectCartHidden}  from '../../redux/selectors/cart.selectors';


const Navigation = ({currentUser,hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsContainer>
        <OptionLink className="nav-item nav-item-ltr" to="/shop">
            SHOP
        </OptionLink>
        <OptionLink className="nav-item nav-item-ltr" to="/contact">
            CONTACT
        </OptionLink>
        {currentUser===null ? <OptionLink className="nav-item nav-item-ltr" to="/signin">SIGNIN</OptionLink> :
                                 <OptionDiv className="nav-item nav-item-ltr" onClick={()=>auth.signOut()}>SIGNOUT</OptionDiv>}
                                 <CartIcon  />
         </OptionsContainer>
          { hidden ? null: <CartDropdown/> } 
    </HeaderContainer>
)
//advanced destructuring: state
const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
})
export default connect(mapStateToProps)(Navigation);
//mapStateToProps and connect will be written anywhere, if we want properties from reducers