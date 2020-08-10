import SHOP_DATA from  '../../components/Pages.Container.Components/shop.data.default.State';
const INITIAL_STATE = {
    collections: SHOP_DATA
}
const shopReducer = (state=INITIAL_STATE,action) => {
    switch(action.type)
    {
        default:
            return state;
    }
}
export default shopReducer;