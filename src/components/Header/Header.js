import {NavLink} from 'react-router-dom';

import NavItem from './NavItem/NavItem';
import SearchBar from './SearchBar/SearchBar';
import './Header.css';


const Header = () => {
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
                <NavLink style={{ textDecoration: 'none' }} activeClassName="active-nav-item" exact={false} to="/genres">
                    <NavItem>Genres</NavItem>
                </NavLink>

                <SearchBar className="searchBar"/>

                <div className="auth">
                    <NavLink style={{ textDecoration: 'none' }} activeClassName="active-nav-item" exact={true} to="/user/profile">
                        <NavItem>My profile</NavItem>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none' }} activeClassName="active-nav-item" exact={true} to="/user/sign-in">
                        <NavItem>Sign in</NavItem>   
                    </NavLink> 
                    <NavLink style={{ textDecoration: 'none' }} activeClassName="active-nav-item" exact={true} to="/user/sign-up"> 
                        <NavItem>Sign up</NavItem>
                    </NavLink> 
                    <NavLink style={{ textDecoration: 'none' }}  to="/"> 
                        <NavItem>Logout</NavItem>  
                    </NavLink> 
                </div>                
            </div>
        </nav>
    );
};

export default Header;