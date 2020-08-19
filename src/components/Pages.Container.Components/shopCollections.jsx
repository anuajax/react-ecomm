import React from 'react';
// import SHOP_DATA from './shop.data.default.State.js'; moved to redux

import {Route} from 'react-router-dom';

import CollectionsOverviewContainer from '../collection-overview/collection.overview.container';
import CollectionPageContainer from './collection.category-page/collection.HOCcontainer';

import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/actions/actionCreators/shop.actions.creator';
import {selectIsCollectionFetching,selectiscollectionsLoaded} from '../../redux/selectors/shop.collection.selectors';





class ShopPage extends React.Component //only job is to fetch async request from back end;
{
    
    componentDidMount()
    {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }
    
    render()
    {

    const {match} = this.props;
    
    return ( 
    <div>     
            
            <Route exact path={`${match.path}`} 
                component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`} 
            component={CollectionPageContainer}/>
           
            </div>
    )

    }
}



const mapDispatchToProps = dispatch => ({
   fetchCollectionsStartAsync : ()=> dispatch(fetchCollectionsStartAsync())
  });
  export default connect(null,mapDispatchToProps)(ShopPage);