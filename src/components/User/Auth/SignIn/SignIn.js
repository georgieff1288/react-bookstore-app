import './SignIn.css'

const SignIn = () => {
    const login = (e) => {
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    };

    return (
        <div className="signIn">
            <form onSubmit={login}>
                <h2>Sign In</h2> 

                <label className="signInLabel" htmlFor="email">Email</label>
                <br/>
                <input type="text" name="email" id="email" placeholder="you@yours.com"/>  

                <br/> 

                <label className="signInLabel" htmlFor="password">Password</label>
                <br/>
                <input type="password" name="password" id="password"/>  

                <button>Sign in</button>
            </form>      
      </div>
    );
};

export default SignIn;