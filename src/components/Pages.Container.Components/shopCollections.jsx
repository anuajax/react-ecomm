import React from 'react';
// import SHOP_DATA from './shop.data.default.State.js'; moved to redux

import {Route} from 'react-router-dom';

import CollectionOverview from '../collection-overview/collection-overview';
import CollectionPage from './collection.category-page/collection.Page.component';

import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/actions/actionCreators/shop.actions.creator';
import WithSpinner from '../withSpinner/withSpinner.component';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching,selectiscollectionsLoaded} from '../../redux/selectors/shop.collection.selectors';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component
{
    
    componentDidMount()
    {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }
    
    render()
    {

    const {match,isCollectionFetching,fetchCollectionsStartAsync,isColleectionsLoaded} = this.props;
    
    return ( 
    <div>     
            
            <Route exact path={`${match.path}`} 
            render={(props)=> <CollectionOverviewWithSpinner isLoading={!isColleectionsLoaded} {...props}/>}/>
            <Route path={`${match.path}/:collectionId`} 
            render={(props)=> <CollectionPageWithSpinner isLoading={!isColleectionsLoaded} {...props}/>}/>
           
            </div>
    )

    }
}


const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isColleectionsLoaded: selectiscollectionsLoaded 
})
const mapDispatchToProps = dispatch => ({
   fetchCollectionsStartAsync : ()=> dispatch(fetchCollectionsStartAsync())
  });
  export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);