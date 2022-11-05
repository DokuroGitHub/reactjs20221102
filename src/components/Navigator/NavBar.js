import './nav.scss';
import NavItem from './NavItem';
import { routes } from './constants';

const NavBar = () => {
    return (
        <div className="topnav">
            {routes.map((e, index) => <NavItem
                key={e.route}
                title={e.title}
                route={e.route}
                activeClassName={`active${index}`}
            />)}
        </div>
    );
}

export default NavBar;