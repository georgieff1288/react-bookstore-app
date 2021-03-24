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

                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" placeholder="you@yours.com"/>
    
                <br/> <br/>
    
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"/>
    
                <br/> <br/>
    
                <label htmlFor="repeatPassword">Confirm password</label>
                <input type="password" name="repeatPassword" id="repeatPassword"/>

                <button>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;