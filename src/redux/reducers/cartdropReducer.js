import { CartDropdownActionTypes } from '../actions/action.Types/cart-drop.Types.action';
const INITIAL_STATE = {
    hidden: true
}
const cartDropDownReducer = (state=INITIAL_STATE,action) => {
switch(action.type)
{
    case CartDropdownActionTypes.TOGGLE_CART_DROPDOWN:
        return {
            ...state, 
            hidden: !state.hidden
        }
    default:
        return state; 

}
}

export default cartDropDownReducer;