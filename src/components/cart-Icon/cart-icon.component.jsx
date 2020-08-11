import React from 'react';
import {ReactComponent as ShoppingIcon} from './cart-icon.svg.svg';
import './cart-icon.styles.scss';

import {connect} from 'react-redux';
import { toggleCartDropDown } from '../../redux/actions/actionCreators/cart-drop.actions.creator.js' ;
import {selectCartItemsCount} from '../../redux/selectors/cart.selectors';
const CartIcon = ({ toggleCartDropDown, itemCount })=> (
    <div className='cart-icon' onClick={toggleCartDropDown}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> {itemCount} </span>
    </div>
) 

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})
const mapDispatchToProps = (dispatch) => ({
  toggleCartDropDown: ()=> dispatch(toggleCartDropDown())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);