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
import SearchResult from './components/SearchBar/SearchResult/SearchResult';
import EditReview from './components/Book/BookDetails/Review/EditReview/EditReview';
import CheckoutCart from './components/Cart/CheckoutCart/CheckoutCart';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { logout } from './services/authService';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import AuthGuard from './hoc/AuthGuard';



const App = () => {
    
    
    return(
        <AuthProvider>
            <CartProvider>
                <div className="app">
                    <Header />
                    <ErrorBoundary>
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
                            <Route path="/user/orders" exact component={AuthGuard(UserOrders)} />
                            <Route path="/user/sign-in" exact component={SignIn} />
                            <Route path="/user/sign-up" exact component={SignUp} />
                            <Route path="/add-book" exact component={AuthGuard(DataSeedForm)} />
                            <Route path="/book/:bookId/edit-review/:reviewId" exact component={AuthGuard(EditReview)} />
                            <Route path="/checkout/cart" exact component={AuthGuard(CheckoutCart)} />             
                            <Route component={ErrorPage} />
                        </Switch>
                    </ErrorBoundary>
                </div>
            </CartProvider>
        </AuthProvider>        
    );
};


export default App;
