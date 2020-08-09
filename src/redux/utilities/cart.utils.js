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

export const remove_item_from_cart = (cartItems,cartItemToRemove)=> {
    const existingCartItemtoRemove = cartItems.find(cartItem =>cartItem.id === cartItemToRemove.id)

    if(existingCartItemtoRemove.quantity===1)
        return cartItems.filter(cartItem=>cartItem.id !== cartItemToRemove.id)
    
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity -1} : cartItem
            )
    
   
}