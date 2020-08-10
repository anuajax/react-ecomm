import React from 'react';
import photo1 from  '../images/photo1.jpg';
import './menuComp.styles.scss';
import MenuItem from './menuItem.jsx';
import {connect} from 'react-redux';
import {selectMenuSections} from '../redux/selectors/menu.selectors';
import {createStructuredSelector} from 'reselect';
   

const MenuList = ({sections}) => (
    <div className="menu-directory">
        {sections.map(section => (<MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} 
         size={section.size} linkUrl={section.linkUrl}/>))}
    </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectMenuSections
})

export default connect(mapStateToProps)(MenuList);