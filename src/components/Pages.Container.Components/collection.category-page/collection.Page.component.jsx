import React from 'react';
import PreviewItem from '../../preview.collectionComp/preview.Item';
import {selectCollection} from '../../../redux/selectors/shop.collection.selectors.js';
import {connect} from 'react-redux';
const CollectionPage = ({collection}) => {
   const {title,items} = collection;
 console.log(collection);
return(
    <div>  
    <h2>{title}</h2>
    {items.map(item=><PreviewItem key={item.id}  item={item}/>)}
   
    </div>
)
}

const mapStateToProps = (state,ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);