import React from 'react';
import './form-input.styles.scss';
const FormInput = ({handleChange,label,name,value,type})=> 
    
 (
    <div className="group">
         <input className="form-input" onChange={handleChange} value={value} type={type} name={name}/>
         { label ? (<label className={`${value.length ? 'shrink' : ''} form-input-label`}>
         {label}</label>) : null }
    </div>
)
export default FormInput;