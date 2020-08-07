import { combineReducers } from 'redux';
import userReducer from './user.Reducer';
import cartDropDownReducer  from './cartdropReducer';
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartDropDownReducer
})
export default rootReducer;