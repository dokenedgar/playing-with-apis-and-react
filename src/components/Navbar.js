import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="nav-wrapper indigo darken-4">
            <div className="container">
                <NavLink to="" className="brand-logo">Fun With APIs</NavLink>
                <NavLink to="" className="sidenav-trigger" data-target="mobile-menu">
                    <i className="material-icons">menu</i>
                </NavLink>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/advice">Advice</NavLink></li>
                    <li><NavLink to="">Tronald Dump</NavLink></li>
                    <li><NavLink to="">About Site</NavLink></li>
                </ul>
                <ul className="sidenav" id="mobile-menu">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/advice">Advice</NavLink></li>
                    <li><NavLink to="">Tronald Dump</NavLink></li>
                    <li><NavLink to="">About Site</NavLink></li>
                </ul>
            </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
