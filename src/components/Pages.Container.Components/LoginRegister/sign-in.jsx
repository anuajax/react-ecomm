import React, { Component } from 'react';
import FormInput from '../../form components/formInput';
import CustomButton from '../../form components/form-buttons';
import {Card} from '@material-ui/core';
import {ReactComponent as Google} from '../../../assets/google-icon.svg';
import './signin.styles.scss';

import {auth, signInWithGoogle} from '../../../firebase/firebase.utils';

class SignIn extends Component
{
    constructor()
    {
        super();
        this.state={
            email:"",
            password:""
        }
    }
    handleSubmit = async event =>
    {
        event.preventDefault();
        const {email,password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        } catch (error) {
            console.log(error);
        }
       
    }
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]:value})

    }
    render()
    {
        return(
            
            <div className="signin">
           
            <h2>SignIn with your email and password.</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} 
                                label="E-mail" required/>
                   
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange}
                                label="Password" required/>
                   <div className="buttons-alignment">
                   <CustomButton type="submit">
                   SIGNIN
                    </CustomButton>
                    <h4> Or </h4>
                    <CustomButton onClick={signInWithGoogle} >
                            <i className="fa fa-2x fa-google"><span className="span-btn">oogle</span></i>
                           
                    </CustomButton>
                    
                    </div>
                </form>
           
            </div>
            
        )
    }
}
export default SignIn;