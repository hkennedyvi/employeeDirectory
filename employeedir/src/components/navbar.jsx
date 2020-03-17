import React, { Component } from "react";
import Search from "./search";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand mb-0 h1">EMPLOYEE DIRECTORY<i className="fas fa-users ml-3"></i></div>
        <Search />
      </nav>
    );
  }
}

export default NavBar;
