import React, {Component} from 'react';
import {PreviewItem } from '../../preview.collectionComp/preview.Item';
import {selectCollection} from '../../../redux/selectors/shop.collection.selectors.js';
import {connect} from 'react-redux';
const CollectionPage = ({collection}) => {
   
 console.log(collection);
return(
    <div>  
    <h2>COleection page</h2>
    </div>
)
}

const mapStateToProps = (state,ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);