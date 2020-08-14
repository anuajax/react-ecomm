import ShopActionTypes from '../actions/action.Types/shop.types.action';

const INITIAL_STATE = {
  collections: null
};
const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ShopActionTypes.UPDATE_COLLECTIONS:
        return {
          ...state,
          collections: action.payload
        };
      default:
        return state;
    }
  };
  
  export default shopReducer;
