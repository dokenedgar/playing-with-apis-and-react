import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="nav-wrapper indigo darken-4">
            <div className="container">
                <a href="" className="brand-logo">Fun With APIs</a>
                <a href="" className="sidenav-trigger" data-target="mobile-menu">
                    <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="">Advice</a></li>
                    <li><a href="">Tronald Dump</a></li>
                    <li><a href="">About Site</a></li>
                </ul>
                <ul className="sidenav" id="mobile-menu">
                    <li><a href="">Advice</a></li>
                    <li><a href="">Tronald Dump</a></li>
                    <li><a href="">About Site</a></li>
                </ul>
            </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
