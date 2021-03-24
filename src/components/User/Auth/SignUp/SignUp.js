import "./SignUp.css"

const SignUp = () => {
    const register = (e) =>{
        e.preventDefault();
        console.log(e.target.email.value)
        console.log(e.target.password.value)
        console.log(e.target.repeatPassword.value)
    };

    return (
        <div className="signUp">
            <form onSubmit={register}>
                <h2>Sign up</h2>

                <label className="signUpLabel" htmlFor="email">Email</label>
                <br/>
                <input type="text" name="email" id="email" placeholder="you@yours.com"/>
    
                <br/> 
    
                <label className="signUpLabel" htmlFor="password">Password</label>
                <br/>
                <input type="password" name="password" id="password"/>
    
                <br/> 
    
                <label className="signUpLabel" htmlFor="repeatPassword">Confirm password</label>
                <br/>
                <input type="password" name="repeatPassword" id="repeatPassword"/>

                <br/> 

                <label className="signUpLabel" htmlFor="username">Username</label>
                <br/>
                <input type="text" name="username" id="username"/>

                <br/> 

                <label className="signUpLabel" htmlFor="address">Address</label>
                <br/>
                <input type="text" name="address" id="address"/>

                <button>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;