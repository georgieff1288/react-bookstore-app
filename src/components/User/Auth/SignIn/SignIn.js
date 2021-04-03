import { useState } from 'react';

import './SignIn.css';
import InputError from '../../../Shared/InputError/InputError';
import { login } from '../../../../services/authService';

const SignIn = ({history}) => {
    const [errorMessage, setErrorMessage] = useState('');

    const onLoginSubmit = (e) => {
        e.preventDefault();

        if(!errorMessage && e.target.email.value && e.target.password.value) {
            let data = {email:e.target.email.value, password:e.target.password.value};
            login(data).then((res) => {
                if(res){
                    setErrorMessage(res);
                };
                history.push('/genres');
            });
        };
    };

    const onEmailChangeHandler = (e) => {
        if (!e.target.value) {
            setErrorMessage('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(e.target.value)) {
            setErrorMessage('Email address is invalid');
        } else {
            setErrorMessage('');
        };
    };

    const onPasswordChangeHandler = (e) => {
        if(!e.target.value){
            setErrorMessage('Password is required');
        } else {
            setErrorMessage('');
        };
    };

    return (
        <div className="signIn">
            <form onSubmit={onLoginSubmit}>
                <h2>Sign In</h2> 

                <InputError>{errorMessage}</InputError>

                <label className="signInLabel" htmlFor="email">Email</label>
                <br/>
                <input type="text" name="email" id="email" onBlur={onEmailChangeHandler} placeholder="you@yours.com"/>  

                <br/> 

                <label className="signInLabel" htmlFor="password">Password</label>
                <br/>
                <input type="password" name="password" id="password" onBlur={onPasswordChangeHandler}/>  

                <button>Sign in</button>
            </form>      
      </div>
    );
};

export default SignIn;