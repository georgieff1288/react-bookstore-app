import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

const AuthGuard = (WrappedComponent) => {
    const Component = (props) => {
        const { user } = useContext(AuthContext);
        const history = useHistory();
        if(!user){
            history.push('/user/sign-in');
            return null;
        };
        return <WrappedComponent {...props}/>
    };
    return Component;
};

export default AuthGuard;