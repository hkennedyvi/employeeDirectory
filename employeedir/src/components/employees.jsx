import React, { Component } from "react";
import Employee from "./employee";
import API from "../utils/API";

class Employees extends Component {
 
  state = {
    employees: [
      { id: 1, date: 10, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 2, date: 15, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 3, date: 23, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 4, date: 30, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 5, date: 10, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 6, date: 15, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 7, date: 23, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 8, date: 30, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 9, date: 30, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 10, date: 30, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" }
    ]
  };

  componentDidMount() {
    this.findEmployees();
  }

  findEmployees = () => {
    const employees = [...this.state.employees];
    let index = -1;
    
    API.getEmployees()
      .then(res =>
        res.data.results.map(employee => {
          index++;
          let email = employee.email;
          let phone = employee.phone;
          let name = employee.name.first + " " + employee.name.last;
          let image = employee.picture.thumbnail;
          employees[index].email = email;
          employees[index].phone = phone;
          employees[index].name = name;
          employees[index].imageUrl = image;
          this.setState({ employees });
          return email;
        })
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
