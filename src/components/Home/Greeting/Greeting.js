import { Link } from 'react-router-dom';

import './Greeting.css';

const Greeting = (props) => {    
    return(
        <div className="greeting">
            {props.children ? 
                <div>
                    <h1>Welcome, {props.children}.</h1>
                    <h1>You can search, rate and order books.</h1>
                </div>
                :
                <div>
                    <h1>Please <Link to="/user/sign-in">Sign-in</Link> to rate and order books.</h1>
                    <h1>Don't have an account yet? <Link to="/user/sign-up">Sign-up</Link> right now.</h1>
                </div>
            }
        </div>
    );
};

export default Greeting;