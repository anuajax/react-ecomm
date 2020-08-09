import { CartDropdownActionTypes } from '../actions/action.Types/cart-drop.Types.action';
import { addItems_To_Cart,remove_item_from_cart } from '../utilities/cart.utils';
const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
};
const cartDropDownReducer = (state=INITIAL_STATE,action) => {
switch(action.type)
{
    case CartDropdownActionTypes.TOGGLE_CART_DROPDOWN:
        return {
            ...state, 
            hidden: !state.hidden,
        }
    case CartDropdownActionTypes.ADD_ITEM_TO_CART:
        return{
            ...state,
            cartItems: addItems_To_Cart(state.cartItems,action.payload)
        }
    case CartDropdownActionTypes.CLEAR_ITEM_FROM_CART :
        return {
            ...state,
            cartItems: state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id)
        }
    case CartDropdownActionTypes.REMOVE_ITEM_FROM_CART:
        return{
            ...state,
            cartItems: remove_item_from_cart(state.cartItems,action.payload)
        }
    default:
        return state; 

}
}

export default cartDropDownReducer;