import style from './NavItem.module.css';

const NavItem = (props) => {
    return (
        <ul>
            <span className={style.navItem}>{props.children}</span>
        </ul>
    );
}

export default NavItem;