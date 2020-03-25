import React from "react";
import Search from "./search";

const NavBar = (props) => {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand mb-0 h1">EMPLOYEE DIRECTORY<i className="fas fa-users ml-3"></i></div>
        <Search handleSearching={props.handleSearching} />
        </nav>
    );
  };

export default NavBar;
