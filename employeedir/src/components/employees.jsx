import React, { Component } from "react";
import Employee from "./employee";

class Employees extends Component {
  state = {};
  render() {
    return (
      <div>
        <Employee />
        <Employee />
        <Employee />
        <Employee />
      </div>
    );
  }
}

export default Employees;
