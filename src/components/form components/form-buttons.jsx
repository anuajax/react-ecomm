import React from 'react';
import './form-button.styles.scss';

const CustomButton = ({children, ...props})=>(
    <button className="custom-button" {...props}>{children}</button>
)
export default CustomButton