import {useState} from 'react';

import InputError from '../../../Shared/InputError/InputError';
import './SignUp.css';

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState('');

    const onRegister = (e) =>{
        e.preventDefault();

        if(!errorMessage){
            console.log(e.target.email.value);
            console.log(e.target.password.value);
            console.log(e.target.repeatPassword.value);
            console.log(e.target.username.value);
            console.log(e.target.address.value);
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

    const onUsernameChangeHandler = (e) => {
        if (!e.target.value) {
            setErrorMessage('Username is required');
        } else {
            setErrorMessage('');
        };
    };
    
    const onAddressChangeHandler = (e) => {
        if (!e.target.value) {
            setErrorMessage('Address is required');
        } else {
            setErrorMessage('');           
        };
    };

    const onPasswordChangeHandler = (e) =>{
        if(e.target.value.length < 6) {
            setErrorMessage('Password must be at least 6 characters');
        } else{
            setErrorMessage('');
            setPassword(e.target.value);
        };
    };

    const onRepeatPasswordChangeHandler = (e) => {
        if(e.target.value !== password) {
            setErrorMessage('Passwords do not match');
        } else{
            setErrorMessage('');
        };
    };

    return (
        <div className="signUp">
            <form onSubmit={onRegister}>
                <h2>Sign up</h2>

                <InputError>{errorMessage}</InputError>

                <label className="signUpLabel" htmlFor="email">Email</label>
                <br/>
                <input type="text" name="email" id="email" onBlur={onEmailChangeHandler} placeholder="you@yours.com"/>
    
                <br/> 
    
                <label className="signUpLabel" htmlFor="password">Password</label>
                <br/>
                <input type="password" name="password" id="password" onBlur={onPasswordChangeHandler}/>
    
                <br/> 
    
                <label className="signUpLabel" htmlFor="repeatPassword">Confirm password</label>
                <br/>
                <input type="password" name="repeatPassword" id="repeatPassword" onBlur={onRepeatPasswordChangeHandler}/>

                <br/> 

                <label className="signUpLabel" htmlFor="username">Username</label>
                <br/>
                <input type="text" name="username" id="username"  onBlur={onUsernameChangeHandler}/>

                <br/> 

                <label className="signUpLabel" htmlFor="address">Address</label>
                <br/>
                <input type="text" name="address" id="address"  onBlur={onAddressChangeHandler}/>

                <button>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;