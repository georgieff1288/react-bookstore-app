import "./SignUp.css"

const SignUp = () => {
    return (
        <div className="signUp">
            <form>
                <h2>Sign up</h2>
                <label className="label">Email</label>
                <input placeholder="you@yours.com"/>
                <br/> <br/>
                <label>Password</label>
                <input />
                <br/> <br/>
                <label>Confirm password</label>
                <input />
                <button>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;