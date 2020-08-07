import React, { Component } from 'react';
import CustomButton from '../form components/form-buttons';
import './cart-dropdwn.styles.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className='cart-items-list'>

        </div>
        <CustomButton>Checkout</CustomButton>
    </div>
)
export default CartDropdown;