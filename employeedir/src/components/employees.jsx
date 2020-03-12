import React, { Component } from "react";
import Employee from "./employee";
import API from "../utils/API";

class Employees extends Component {
     //Every React component has a property called props
  //Props includes data that we give to a component
  //State includes data that is local or private to that component
  //The component that owns a piece of the state
  //shoud be the one modifying it
  state = {
    employees: [
      { id: 1, date: 10 },
      { id: 2, date: 15 },
      { id: 3, date: 23 },
      { id: 4, date: 30 }
    ]
  };

  searchEmployees = query => {
    API.search(query)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleReset = () => {
    const employees = this.state.employees.map(c => {
      c.date = 0;
      return c;
    });
    this.setState({ employees });
  };
  handleHire = employee => {
    const employees = [...this.state.employees];
    const index = employees.indexOf(employee);
    employees[index] = { ...employee };
    employees[index].date++;
    this.setState({ employees });
  };
  //Event handler
  handleDelete = employeeId => {
    const employees = this.state.employees.filter(c => c.id !== employeeId);
    this.setState({ employees });
  };
 

  render() {
    return (
      <div>
        <button 
        onClick={this.searchEmployees}
        className="btn btn-primary btn-sm m-2"
        >
          Search Employees
        </button>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.employees.map(employee => (
          <Employee
            key={employee.id}
            onDelete={this.handleDelete}
            onHire={this.handleHire}
            //employee object carries all the data about the employee
            // date={employee.date}
            // id={employee.id}
            employee={employee}
          />
        ))}
      </div>
    );
  }
}

export default Employees;
