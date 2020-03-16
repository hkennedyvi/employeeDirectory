import React, { Component } from "react";
import Employee from "./employee";
import API from "../utils/API";

class Employees extends Component {

  state = {
    employees: [
      { id: 1, points: 100, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 2, points: 150, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 3, points: 230, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 4, points: 300, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 5, points: 100, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 6, points: 150, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 7, points: 230, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 8, points: 300, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 9, points: 300, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 10, points: 300, name: "Joe Somebody", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" }
    ]
  };

  componentDidMount() {
    this.findEmployees();
  }

  findEmployees = () => {

    API.getEmployees()
      .then(res =>
        res.data.results.map((employee, index) => {
          let employees = [...this.state.employees];
          let email = employee.email;
          let phone = employee.phone;
          let name = employee.name.first + " " + employee.name.last;
          let image = employee.picture.thumbnail;
          employees[index].email = email;
          employees[index].phone = phone;
          employees[index].name = name;
          employees[index].imageUrl = image;
          this.setState({ employees });
          console.log(employees[index]);
          return email;
        })
      )

      .catch(err => console.log(err));
  };

  handleReset = () => {
    const employees = this.state.employees.map(c => {
      c.points = 0;
      return c;
    });
    this.setState({ employees });
  };
  handleIncrement = employee => {
    const employees = [...this.state.employees];
    const index = employees.indexOf(employee);
    employees[index] = { ...employee };
    employees[index].points++;
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
            onIncrement={this.handleIncrement}
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
