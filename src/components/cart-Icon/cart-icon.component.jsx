import React from 'react';
import {ReactComponent as ShoppingIcon} from './cart-icon.svg.svg';
import './cart-icon.styles.scss';

import {connect} from 'react-redux';
import { toggleCartDropDown } from '../../redux/actions/actionCreators/cart-drop.actions.creator.js' ;
const CartIcon = ({ toggleCartDropDown })=> (
    <div className='cart-icon' onClick={toggleCartDropDown}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> 0 </span>
    </div>
)


const mapDispatchToProps = (dispatch) => ({
  toggleCartDropDown: ()=> dispatch(toggleCartDropDown())
})

export default connect(null,mapDispatchToProps)(CartIcon);