import { Component } from 'react';
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Categories from './components/Books/Categories/Categories';
import MyProfile from './components/User/MyProfile/MyProfile';
import SignIn from './components/User/Auth/SignIn/SignIn';
import SignUp from './components/User/Auth/SignUp/SignUp';

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="app">
                <Header />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/categories" component={Categories} />
                    <Route path="/user/profile" component={MyProfile} />
                    <Route path="/user/sign-in" component={SignIn} />
                    <Route path="/user/sign-up" component={SignUp} />
                </Switch>

            </div>
        );
    };
;}



export default App;
