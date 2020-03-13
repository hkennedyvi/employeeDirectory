import React, { Component } from "react";
import NavBar from "./components/navbar";
import Employees from "./components/employees";
import Search from "./components/search"

class App extends Component {


  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Search />
        <Employees />
      </React.Fragment>
    );
  }
}

export default App;
