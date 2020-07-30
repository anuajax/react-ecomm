import React from 'react';
import SignIn from './sign-in';
import SignUp from './sign-up';

import './signin.styles.scss';
const SignInAndSignUp = ()=>(
    <div className="signin-and-signup">

    <SignIn/>
    <SignUp/>
    </div>
);
export default SignInAndSignUp;