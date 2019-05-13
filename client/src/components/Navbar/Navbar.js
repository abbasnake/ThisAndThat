import React from 'react';
import { NavLink } from "react-router-dom";
import AppLogo from '../AppLogo';
import TodosLogo from '../TodosLogo';
import StatisticsLogo from '../StatisticsLogo';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <AppLogo />
      <NavLink to="/" exact className="Navbar-link" activeClassName="Navbar-link-active">
        <TodosLogo />
      </NavLink>
      <NavLink to="/statistics" exact className="Navbar-link" activeClassName="Navbar-link-active">
        <StatisticsLogo />
      </NavLink>
    </nav>
  )
}

export default Navbar;