import {createSelector} from 'reselect';
const selectShop = state => state.shop;
const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    women: 4,
    men: 5
}

export const selectCollections = createSelector(
    [selectShop],
    (shop=>shop.collections)
);


export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
  ); 

  //for the router currying function....that returns another function
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections.find(collection=>collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  );