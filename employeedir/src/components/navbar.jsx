import React, { Component } from "react";
import Search from "./search";

class NavBar extends Component {
  state = {
    employees: this.props
  };
  render() {
    // console.log("FROM NAVBAR STATE", this.state.employees);
    // console.log("FROM NAVBAR", this.props);
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand mb-0 h1">EMPLOYEE DIRECTORY<i className="fas fa-users ml-3"></i></div>
        <Search employees={this.state.employees}/>
      </nav>
    );
  }
}

export default NavBar;
