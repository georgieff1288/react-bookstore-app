import './SignIn.css'

const SignIn = () => {
    return (
        <div className="signIn">
            <form >
                <h2>Sign In</h2>       
                <label>Email</label>
                <input placeholder="you@yours.com"/>     
                <br/> <br/>     
                <label>Password</label>
                <input />  
                <button>Sign in</button>
            </form>      
      </div>
    );
};

export default SignIn;