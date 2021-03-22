import NavItem from './NavItem/NavItem';
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <nav className={style.navigation}>                      
            <div className={style.links}>
            <div className="img-item"><img src="./books-logo.png" alt=""></img></div>                 
                <NavLink style={{ textDecoration: 'none' }} activeClassName="active-navigation-item" exact={true} to="/">
                    <NavItem>Home</NavItem>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} activeClassName="active-navigation-item" exact={true} to="/categories">
                    <NavItem>Categories</NavItem>
                </NavLink>

                <div className={style.auth}>
                    <NavLink style={{ textDecoration: 'none' }} activeClassName="active-navigation-item" exact={true} to="/my-profile">
                        <NavItem>My profile</NavItem>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none' }} activeClassName="active-navigation-item" exact={true} to="/register"> 
                        <NavItem>Register</NavItem>
                    </NavLink> 
                    <NavLink style={{ textDecoration: 'none' }} activeClassName="active-navigation-item" exact={true} to="/login">
                        <NavItem>Login</NavItem>   
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