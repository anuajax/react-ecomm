import React from 'react';
// import SHOP_DATA from './shop.data.default.State.js'; moved to redux

import {Route} from 'react-router-dom';

import CollectionOverview from '../collection-overview/collection-overview';
import CollectionPage from './collection.category-page/collection.Page.component';

import {firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/actions/actionCreators/shop.actions.creator';
import WithSpinner from '../withSpinner/withSpinner.component';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component
{
    state = {
        loading: true
    };
    unSubscribeFromFirestoreSnapShot = null;
    componentDidMount()
    {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

       this.unSubscribeFromFirestoreSnapShot = collectionRef.onSnapshot(async snapShot=>{
            const collectionsMap =  convertCollectionsSnapshotToMap(snapShot);
            updateCollections(collectionsMap);
            this.setState({loading:false});
        });
    }
    
    render()
    {

    const {match} = this.props;
    const {loading} = this.state;
    return ( 
    <div>     
            
            <Route exact path={`${match.path}`} render={(props)=> <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
            <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
           
            </div>
    )

    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
      dispatch(updateCollections(collectionsMap))
  });
  export default connect(null,mapDispatchToProps)(ShopPage);