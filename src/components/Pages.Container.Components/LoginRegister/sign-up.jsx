import React, { Component } from 'react';
import FormInput from '../../form components/formInput';
import {Card} from '@material-ui/core';
import {auth,createUserProfileDocument} from '../../../firebase/firebase.utils';
import CustomButton from '../../form components/form-buttons';
import './signin.styles.scss';

class SignUp extends Component
{
    constructor()
    {
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'',
           
        }
    }
    handleSubmit= async event =>
    {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password!==confirmPassword)
        {
            alert('passwords do not match');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
           await createUserProfileDocument(user, {displayName});
           this.setState({displayName:'',email:'',password:'',confirmPassword:''});
        } catch (error) {
            console.log(error);
            alert(error.message);
            
        }
      
    }
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]:value})

    }
    render()
    {
        const {displayName,email,password,confirmPassword} = this.state;
        return(
           
            <div className="sign-up">
            
            <h2> SignUp with your email and password</h2>
            <form onSubmit={this.handleSubmit}>
                <FormInput type="text" name='displayName' value={displayName} label='Name' 
                    handleChange={this.handleChange} required/>
                <FormInput type="email" name="email" value={email} handleChange={this.handleChange} 
                    label="E-mail" required/>
                <FormInput type="password" name="password" value={password} handleChange={this.handleChange}
                    label="Password" required/>
                <FormInput type="password" name="confirmPassword" value={confirmPassword} handleChange={this.handleChange}
                    label="Confirm-Password" required/>
                <CustomButton type="submit">SIGNUP</CustomButton>
            </form>
           
            </div>
        );
    }
}
export default SignUp;