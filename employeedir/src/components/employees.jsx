import React, { Component } from "react";
// import Employee from "./employee";
import API from "../utils/API";
// import Search from "./search";
// import Sort from "./sort";
import NavBar from "./navbar";

class Employees extends Component {

  state = {
    employees: [
      { id: 1, points: 100, name: "Joe Z", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 2, points: 150, name: "Joe D", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 3, points: 230, name: "Joe A", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 4, points: 300, name: "Joe L", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 5, points: 100, name: "Joe G", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 6, points: 150, name: "Joe B", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 7, points: 230, name: "Joe X", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 8, points: 300, name: "Joe N", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 9, points: 300, name: "Joe F", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" },
      { id: 10, points: 300, name: "Joe Y", email: "gmail", phone: "503-123-4567", imageUrl: "https://picsum.photos/100" }
    ]
  };

  componentDidMount() {
    this.findEmployees();
  }

  findEmployees = () => {
    let employees = [...this.state.employees];
    API.getEmployees()
      .then(res => {

        res.data.results.map((employee, index) => {
          let email = employee.email;
          let phone = employee.phone;
          let name = employee.name.first + " " + employee.name.last;
          let image = employee.picture.thumbnail;

          employees[index].email = email;
          employees[index].phone = phone;
          employees[index].name = name;
          employees[index].imageUrl = image;
          this.setState({ employees });
          return employee;
        });
      })

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

  handleDelete = employeeId => {
    const employees = this.state.employees.filter(c => c.id !== employeeId);
    this.setState({ employees });
  };

  handleMessage = employeeEmail => {
    const el = document.createElement('textarea');
    el.value = employeeEmail;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert(employeeEmail + " is copied to your clipboard");
  }


  handleSort = () => {
    let employees = [...this.state.employees];
    let firstEmployee = employees[0].name.toLowerCase().split(" ")[1];
    let secondEmployee = employees[1].name.toLowerCase().split(" ")[1];
    let asc = firstEmployee > secondEmployee;
    let desc = firstEmployee < secondEmployee;
    let ascendSort = () => {
      employees.sort((a, b) => {
        let employeeA = a.name.toLowerCase().split(" ")[1];
        let employeeB = b.name.toLowerCase().split(" ")[1];
        return (employeeA < employeeB) ? -1 : (employeeA > employeeB) ? 1 : 0;
      });
      this.setState({ employees });
    };
    let descendSort = () => {
      employees.sort((b, a) => {
        let employeeA = a.name.toLowerCase().split(" ")[1];
        let employeeB = b.name.toLowerCase().split(" ")[1];
        return (employeeA < employeeB) ? -1 : (employeeA > employeeB) ? 1 : 0;
      });
      this.setState({ employees });
    }

    if (asc) {
      ascendSort();
    } else if (desc) {
      descendSort();
    } else {
      descendSort();
    }

  }

  render() {
    return (
      <div>
        <NavBar />
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Pic</th>
              <th scope="col" onClick={this.handleSort}>Name</th>
              {/* <Sort employees={this.state.employees} /> */}
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Message/Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(employee => (
              <tr key={employee.id}>
                <th scope="row"><img src={employee.imageUrl} alt=""></img></th>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>
                  <button className="btn btn-info" onClick={() => this.handleMessage(employee.email)}><i className="fas fa-envelope"></i></button>
                  <button className="btn btn-danger" onClick={() => this.handleDelete(employee.id)}><i className="fas fa-times"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>



        {/* <button
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
            employee={employee}
          />
        ))} */}
      </div>
    );
  }
}

export default Employees;
