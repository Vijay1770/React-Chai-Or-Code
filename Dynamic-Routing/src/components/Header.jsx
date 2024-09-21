import { NavLink } from "react-router-dom";
import "./Header.css";
export const Header = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" activeClassName="active" className="nav-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/connect" activeClassName="active" className="nav-item">
            Connect
          </NavLink>
        </li>
        <li>
          <NavLink to="/movie" activeClassName="active" className="nav-item">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" className="nav-item">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active" className="nav-item">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
