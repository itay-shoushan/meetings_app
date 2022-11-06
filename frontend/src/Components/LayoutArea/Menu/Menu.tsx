import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/meeting/list">show meetings by team</NavLink>
            <span> | </span>
            <NavLink to="/meeting/new">Add new meeting</NavLink>
        </div>
    );
}

export default Menu;

