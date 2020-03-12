import React, { Component } from "react";
import NavBar from "./components/navbar";
import Employees from "./components/employees";

class App extends Component {


  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Employees />
      </React.Fragment>
    );
  }
}

export default App;
