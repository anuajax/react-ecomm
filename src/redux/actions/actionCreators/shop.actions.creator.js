import ShopActionTypes from '../action.Types/shop.types.action';
import {firestore,convertCollectionsSnapshotToMap} from '../../../firebase/firebase.utils';
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
 
});
export const fetchcollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload : collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type : ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload : errorMessage
});
export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    collectionRef.get().then(snapShot=>{
      const collectionsMap =  convertCollectionsSnapshotToMap(snapShot);
      dispatch(fetchcollectionsSuccess(collectionsMap));
      //updateCollections(collectionsMap);
      //this.setState({loading:false});
  } ) .catch(error => dispatch(fetchCollectionsFailure(error.message)))
  }
}

