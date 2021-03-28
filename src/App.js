import {Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Categories from './components/Books/Categories/Categories';
import MyProfile from './components/User/UserProfile/UserProfile';
import SignIn from './components/User/Auth/SignIn/SignIn';
import SignUp from './components/User/Auth/SignUp/SignUp';
import ErrorPage from './components/ErrorPage/ErrorPage'

import './App.css';

const App = () => {
        return(
            <div className="app">
                <Header />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/categories" component={Categories} />
                    <Route path="/user/profile" component={MyProfile} />
                    <Route path="/user/sign-in" component={SignIn} />
                    <Route path="/user/sign-up" component={SignUp} />
                    <Route component={ErrorPage} />
                </Switch>

            </div>
        );
};



export default App;
