import React from 'react';
import CustomButton from '../form components/form-buttons';
import './cart-dropdwn.styles.scss';
import CartItem from '../cart-Item/cart-item.component';
import {connect} from 'react-redux';
const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className='cart-items-list'>
            { cartItems.map(cartItem => ( <CartItem key={cartItem.id} item={cartItem}/>))}
        </div>
        <CustomButton>Checkout</CustomButton>
    </div>
)

const mapStateToProps = ({cart : { cartItems }}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);