import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import './Header.css';
import NavItem from './NavItem/NavItem';
import SearchBar from './SearchBar/SearchBar';
import { AuthContext } from '../../context/UserContext'; 

const Header = () => {
    const { user } = useContext(AuthContext);  

        return(
            <nav className="navigation">                      
                <div className="links">
                    <div>
                        <img className="logoImg" src="./books-logo.png" alt=""></img>
                        <br/>
                        <span className="logo">Online bookstore</span>
                    </div>                 
                    <NavLink style={{ textDecoration: 'none' }} activeClassName="active-nav-item" exact={true} to="/">
                        <NavItem>Home</NavItem>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none' }} activeClassName="active-nav-item" exact={false} to="/books">
                        <NavItem>Books</NavItem>
                    </NavLink>
    
                    <SearchBar className="searchBar"/>
                    {user?
                    <div className="signedIn">
                    <NavLink style={{ textDecoration: 'none' }} activeClassName="active-nav-item" exact={true} to="/user/orders">
                        <NavItem>My orders</NavItem>
                    </NavLink>                        
                    <NavLink style={{ textDecoration: 'none' }} activeClassName="active-nav-item" exact={true} to="/add-book"> 
                        <NavItem>Add book</NavItem>
                    </NavLink> 
                    <NavLink style={{ textDecoration: 'none' }} to="/logout"> 
                        <NavItem>Logout</NavItem>  
                    </NavLink> 
                    </div>     
                    :
                    <div className="auth">                        
                    <NavLink className="sign" style={{ textDecoration: 'none' }} activeClassName="active-nav-item" exact={true} to="/user/sign-in">
                        <NavItem>Sign in</NavItem>   
                    </NavLink> 
                    <NavLink className="sign" style={{ textDecoration: 'none' }} activeClassName="active-nav-item" exact={true} to="/user/sign-up"> 
                        <NavItem>Sign up</NavItem>
                    </NavLink>                        
                    </div>  
                    }                               
                </div>
            </nav>
        );
};

export default Header;