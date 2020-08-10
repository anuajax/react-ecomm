import {createSelector} from 'reselect';
const selectShop = state => state.shop;

export const shopCollectionSelector = createSelector(
    [selectShop],
    (shop=>shop.collections)
);