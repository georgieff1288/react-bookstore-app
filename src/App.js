import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Genres from './components/Genres/Genres';
import UserOrders from './components/User/UserOrders/UserOrders';
import SignIn from './components/User/Auth/SignIn/SignIn';
import SignUp from './components/User/Auth/SignUp/SignUp';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/Book/BookDetails/BookDetails';
import DataSeedForm from './components/DataSeedForm/DataSeedForm';
import SearchResult from './components/Header/SearchBar/SearchResult/SearchResult';
import { logout } from './services/authService';
import { AuthProvider } from './context/UserContext';



const App = () => {
    
    
    return(
        <AuthProvider>
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/logout" render={() => {
                        logout();
                        return <Redirect to="/" />
                        }} />
                    <Route path="/" exact component={Home} />
                    <Route path="/books/genre/:name?" exact component={Genres} />
                    <Route path="/books" exact component={Genres} />
                    <Route path="/books/details/:bookId" exact component={BookDetails} />
                    <Route path="/search/:query" exact component={SearchResult} />
                    <Route path="/user/orders" exact component={UserOrders} />
                    <Route path="/user/sign-in" exact component={SignIn} />
                    <Route path="/user/sign-up" exact component={SignUp} />
                    <Route path="/add-book" exact component={DataSeedForm} />              
                    <Route component={ErrorPage} />
                </Switch>
            </div>
        </AuthProvider>        
    );
};


export default App;
