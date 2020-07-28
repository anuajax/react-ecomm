import React from 'react';
import photo1 from  '../images/photo1.jpg';
import './menuComp.styles.scss';
import MenuItem from './menuItem.jsx';


const sections = [
    {
      title: 'HATS',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'JACKETS',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'SNEAKERS',
      imageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'WOMEN',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'MEN',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      
      id: 5,
      linkUrl: 'shop/mens'
    },
    {
        title: 'MEN',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
       
        id: 5,
        linkUrl: 'shop/mens'
      },
      {
        title: 'MEN',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      
        id: 5,
        linkUrl: 'shop/mens'
      },
      {
        title: 'MEN',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
       
        id: 5,
        linkUrl: 'shop/mens'
      }
  ];
  

const MenuList = () => (
    <div className="menu-directory">
        {sections.map(section => (<MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} 
         size={section.size} linkUrl={section.linkUrl}/>))}
    </div>
)
export default MenuList;