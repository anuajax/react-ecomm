import React from 'react';
// import SHOP_DATA from './shop.data.default.State.js'; moved to redux

import {Switch,Route} from 'react-router-dom';

import CollectionOverview from '../collection-overview/collection-overview';
import CollectionPage from './collection.category-page/collection.Page.component';

const ShopPage = ({match})=> {
    console.log(match);
    return ( 
    <div>     
            
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
           
            </div>
)}
export default ShopPage;