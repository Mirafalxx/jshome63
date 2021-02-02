import React from "react";
import { NavLink } from "react-router-dom";
const actStyles = {
  fontWeight: "bold",
  color: "red",
  textDecoration: "none",
};
const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={actStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeStyle={actStyles}>
            Add
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeStyle={actStyles}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" activeStyle={actStyles}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
