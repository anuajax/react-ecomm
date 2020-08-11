import React from 'react';
import './checkout-item.styles.scss';
import { Button } from '@material-ui/core';
import {connect } from 'react-redux';
import {clearItemFromCheckout,addItemsAction,removeItemFromCart} from '../../../redux/actions/actionCreators/cart-drop.actions.creator';
const CheckoutItem = ({item,clearItem,addItem,removeItem}) => {
    const {name,imageUrl,price,quantity} = item;
return(
<div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt='imge'/>
         </div>
   
   
            <span className="name">{name}</span>
            <span className='quantity'>
            <div className="arrow" onClick={()=>removeItem(item)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={()=>addItem(item)}>&#10095;</div>
            
            </span>

            <span className="price"> ${price}</span>
            <Button onClick={()=>clearItem(item)}>REMOVE</Button>
</div>
)}
const mapDispatchToProps =(dispatch)=> ({
    clearItem: item => dispatch(clearItemFromCheckout(item)),
    addItem: item => dispatch(addItemsAction(item)),
    removeItem : item => dispatch(removeItemFromCart(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem);