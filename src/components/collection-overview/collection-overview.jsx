import React from 'react';
import './collection-overview.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { shopCollectionSelector } from '../../redux/selectors/shop.collection.selectors.js';
import PreviewCollection from  '../preview.collectionComp/preview.collection';

const CollectionOverview = ({collections})=> (
    <div className="collections-overview">
         {collections.map(({id, items, ...otherProps})=> (
                    <PreviewCollection key={id} items={items} {...otherProps}/>
                ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: shopCollectionSelector
})
export default  connect(mapStateToProps)(CollectionOverview);

