import React, { Component } from 'react';
import SHOP_DATA from './shop.data.default.State.js';
import PreviewCollection from  '../preview.collectionComp/preview.collection';
class ShopPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            collections: SHOP_DATA
        }
    }
    render()
    {
        return(
            <div>
                {this.state.collections.map(({id, items, ...otherProps})=> (
                    <PreviewCollection key={id} items={items} {...otherProps}/>
                ))}
            </div>
        )
    }
}
export default ShopPage;