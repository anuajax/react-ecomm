import React from 'react';
import PreviewItem from './preview.Item';
import {IconButton,Icon} from '@material-ui/core';
import './preview.Coll.styles.scss'
 const PreviewCollection =({id,title,items}) => (
    <div className="preview-collection-item">
    <div className="view-more">
    <h1 className="h1-collection">{title}</h1>
    
    <IconButton><i className="fa fa-arrow-circle-right " aria-hidden="true"></i></IconButton>
    
    </div>
        
        <div  className="flex-preview-items">
        {items.filter((item,index)=>index<5).map(item => (
            <PreviewItem key={id} name={item.name} imageUrl={item.imageUrl} price={item.price}/>
        ))}
        
        </div>
    </div>
 )
 export default PreviewCollection;
 