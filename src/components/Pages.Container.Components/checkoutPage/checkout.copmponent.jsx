import React from 'react';
import './checkout.styles.scss';
import CheckoutPricing from './checkout-price.component';
import CheckoutItem from './checkout-item';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartTotal} from '../../../redux/selectors/cart.selectors';
const Checkout = ({cartItems,cartTotal})=> (
    <div className="checkout-page">
        
        <div className='checkout-items'>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
       
        <div className="checkout-total">
                <CheckoutPricing total={cartTotal}/>
        </div>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})
export default connect(mapStateToProps)(Checkout);