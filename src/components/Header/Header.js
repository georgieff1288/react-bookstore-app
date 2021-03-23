import {NavLink} from 'react-router-dom';

import NavItem from './NavItem/NavItem';
import SearchBar from './SearchBar/SearchBar';

import './Header.css';


const Header = () => {
    return(
        <nav className="navigation">                      
            <div className="links">
                <div>
                    <img src="./books-logo.png" alt=""></img>
                    <br/>
                    <span className="logo">Online bookstore</span>
                </div>                 
                <NavLink style={{ textDecoration: 'none' }} activeClassName="active-navigation-item" exact={true} to="/">
                    <NavItem>Home</NavItem>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} activeClassName="active-navigation-item" exact={true} to="/categories">
                    <NavItem>Categories</NavItem>
                </NavLink>

                <SearchBar/>

                <div className="auth">
                    <NavLink style={{ textDecoration: 'none' }} activeClassName="active-navigation-item" exact={true} to="/user/profile">
                        <NavItem>My profile</NavItem>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none' }} activeClassName="active-navigation-item" exact={true} to="/user/sign-in">
                        <NavItem>Sign in</NavItem>   
                    </NavLink> 
                    <NavLink style={{ textDecoration: 'none' }} activeClassName="active-navigation-item" exact={true} to="/user/sign-up"> 
                        <NavItem>Sign up</NavItem>
                    </NavLink> 
                    <NavLink style={{ textDecoration: 'none' }} activeClassName="active-navigation-item" exact={true} to="/"> 
                        <NavItem>Logout</NavItem>  
                    </NavLink> 
                </div>                
            </div>
        </nav>
    );
};

export default Header;