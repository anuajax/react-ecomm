import { CartDropdownActionTypes } from '../action.Types/cart-drop.Types.action';
export const toggleCartDropDown = () => ({
    type: CartDropdownActionTypes.TOGGLE_CART_DROPDOWN
})

export const addItemsAction = (item) => ({
    type: CartDropdownActionTypes.ADD_ITEM_TO_CART,
    payload: item
});