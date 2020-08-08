export const addItems_To_Cart = (cartItems, cartItemToAdd) => {
    const ExistingcartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if(ExistingcartItem)
    {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity +1} : cartItem
            )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}