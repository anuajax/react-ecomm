import React from 'react';
import CustomButton from '../form components/form-buttons';
import './cart-dropdwn.styles.scss';
import CartItem from '../cart-Item/cart-item.component';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {selectCartItems} from '../../redux/selectors/cart.selectors';
import {toggleCartDropDown} from '../../redux/actions/actionCreators/cart-drop.actions.creator'; 

const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className="cart-dropdown">
        <div className='cart-items-list'>

            { 
                cartItems.length ? 
                (cartItems.map(cartItem => ( <CartItem key={cartItem.id} item={cartItem}/>))) :
                (<span className="empty-message">Your cart is empty.</span>)
            }
        </div>
        <CustomButton onClick = {()=> {history.push('/checkout'); dispatch(toggleCartDropDown())}}>Checkout</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state) 
})



export default withRouter(connect(mapStateToProps)(CartDropdown));