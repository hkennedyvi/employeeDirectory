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
      { id: 1, date: 10, name: "Joe Somebody", email: "gmail", phone: "503-123-4567" },
      { id: 2, date: 15, name: "John Nobody", email: "gmail", phone: "503-123-4567" },
      { id: 3, date: 23, name: "Joe Somebody", email: "gmail", phone: "503-123-4567" },
      { id: 4, date: 30, name: "Joe Somebody", email: "gmail", phone: "503-123-4567" },
      { id: 5, date: 10, name: "Joe Somebody", email: "gmail", phone: "503-123-4567" },
      { id: 6, date: 15, name: "Joe Somebody", email: "gmail", phone: "503-123-4567" },
      { id: 7, date: 23, name: "Joe Somebody", email: "gmail", phone: "503-123-4567" },
      { id: 8, date: 30, name: "Joe Somebody", email: "gmail", phone: "503-123-4567" },
      { id: 9, date: 30, name: "Joe Somebody", email: "gmail", phone: "503-123-4567" },
      { id: 10, date: 30, name: "Joe Somebody", email: "gmail", phone: "503-123-4567" }
    ]
  };

  componentDidMount() {
    this.findEmployees();
  }

  findEmployees = () => {
    API.getEmployees()
      .then(res =>
        res.data.results.map(employee => {
          let email = employee.email;
          console.log(email);
          console.log(this.state.employees);
          return email;

        })
        // employee.name, employee.phone, employee.picture))
        // console.log(res.data.results[0].name, res.data.results[0].email)
      )
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
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset Employees
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
