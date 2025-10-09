import logo from "../assets/shared/logo.svg";
import "../css/header/HeaderPage.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header-nav">
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="header-line"></div>
      </div>
      <div className="nav-links">
        <div className="nav-link">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>00</span>
            <p>HOME</p>
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink
            to="/destination"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>01</span>
            <p>DESTINATION</p>
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink
            to="/crew"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>02</span>
            <p>CREW</p>
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink
            to="/technology"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>03</span>
            <p>TECHNOLOGY</p>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
