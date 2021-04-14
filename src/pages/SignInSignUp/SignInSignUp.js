import React from 'react'
import SignIn from '../../components/SignIN/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import './SignInSignUp.scss';

function SignInSignUp() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInSignUp
