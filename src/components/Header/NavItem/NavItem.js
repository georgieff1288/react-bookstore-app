import './NavItem.css';

const NavItem = (props) => {
    return (
        <ul>
            <span className="navItem">{props.children}</span>
        </ul>
    );
}

export default NavItem;