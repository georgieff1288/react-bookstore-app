import { Link } from 'react-router-dom';
import { useContext, useEffect,useState } from 'react';
import './Greeting.css';
import { AuthContext } from '../../../context/AuthContext';
import { getUsername } from '../../../services/firestoreService';

const Greeting = () => {    
    const {user} = useContext(AuthContext);
    const [username, setUsername] = useState();
    useEffect(() => {
        if(user){
            getUsername(user.uid, setUsername);
        } 
    },[user]);
  
    return(
        <div className="greeting">
            {user? 
                <div>
                    <h1>Welcome, {username}.</h1>
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