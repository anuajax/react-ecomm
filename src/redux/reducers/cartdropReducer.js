import { CartDropdownActionTypes } from '../actions/action.Types/cart-drop.Types.action';
import { addItems_To_Cart } from '../utilities/cart.utils';
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
    default:
        return state; 

}
}

export default cartDropDownReducer;