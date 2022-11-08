import './nav.scss';
import { NavLink } from "react-router-dom";
import { ROUTE_HOME } from './constants';

const NavItem = (props) => {
    const { route, title, activeClassName } = props;
    return (
        <NavLink exact={route === ROUTE_HOME} activeClassName={activeClassName} to={route}>{title}</NavLink>
    );
}

export default NavItem;