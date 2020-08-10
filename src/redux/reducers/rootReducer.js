import { combineReducers } from 'redux';
import userReducer from './user.Reducer';
import MenuCompReducer from './menu-comp.Reducer'; 
import cartDropDownReducer  from './cartdropReducer';
import { persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';    //local storage

const  persistConfig = {
    key : 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartDropDownReducer,
    menu: MenuCompReducer
})
export default persistReducer(persistConfig,rootReducer);