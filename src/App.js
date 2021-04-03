import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Genres from './components/Genres/Genres';
import UserOrders from './components/User/UserOrders/UserOrders';
import SignIn from './components/User/Auth/SignIn/SignIn';
import SignUp from './components/User/Auth/SignUp/SignUp';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/Book/BookDetails/BookDetails';
import { logout } from './services/authService';

import './App.css';

const App = () => {

    return(
        <div className="app">
            <Header />

            <Switch>
                <Route path="/logout" render={() => {
                logout();
                return <Redirect to="/" />
                 }} />
                <Route path="/" exact component={Home} />
                <Route path="/genres/:name?" component={Genres} />
                <Route path="/user/orders" component={UserOrders} />
                <Route path="/user/sign-in" component={SignIn} />
                <Route path="/user/sign-up" component={SignUp} />
                <Route path="/books/details/:bookId" component={BookDetails} />
                <Route component={ErrorPage} />
            </Switch>

        </div>
    );
};



export default App;
