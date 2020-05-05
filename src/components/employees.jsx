import React, { Component } from "react";
// import Employee from "./employee";
import API from "../utils/API";
// import Search from "./search";
//import Sort from "./sort";
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
    ],
    searchTerm: ""
  };

  employeeSearch = event => {
    console.log(event.target.value);
    let userSearch = event.target.value;
    this.setState({ searchTerm: userSearch });
    console.log(this.state.searchTerm);
    // //   this.setState({searchTerm: userSearch});
    // const searchedResults = this.state.employees.filter(item => {
    //   let values = Object.values(item)
    //     .join("")
    //     .toLowerCase();
    //   // console.log(values);
    //   return values.indexOf(filter.toLowerCase()) !== -1;
    // });
    // this.setState({ searchTerm: searchedResults });
    // console.log(searchedResults);
  }

  handleSearch = event => {
    event.preventDefault();
    const existingSearchTerm = this.state.searchTerm;
    let searchTerm = existingSearchTerm + event.target.value;
    event.target.value = searchTerm;
    searchTerm = searchTerm.toLowerCase();


    console.log(searchTerm);
    const employees = this.state.employees.filter(
      employee => {
        let values = Object.values(employee.name)
          .join("")
          .toLowerCase();
        return values.indexOf(searchTerm) !== -1;

      });
    console.log(employees);
    this.setState({ employees: employees, searchTerm: searchTerm });

  }

  handleInputChange = event => {
    //et userSearch = event.target.value.toLowerCase();
    let employees = this.state.employees;
    console.log(employees);
    //setSearchTerm(userSearch);
    // eslint-disable-next-line array-callback-return
    employees.map(employee => {
      // let firstName = employee.name.toLowerCase().split(" ")[0];
      // let lastName = employee.name.toLowerCase().split(" ")[1];
      // if (userSearch === firstName) {
      //     alert("We have an employee with this first name");
      // } else if (userSearch === lastName) {
      //     alert("We have an employee with this last name");
      // } else return employee;
    });
  };

  componentDidMount() {
    this.findEmployees();
  }

  findEmployees = () => {
    let employees = [...this.state.employees];
    API.getEmployees()
      .then(res => {

        // let employeeList = res.data.results;
        // this.setState( {employees: employeeList} )
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

  handleSearching = event => {
    console.log(this.state);
    console.log(this.props.searchTerm)
    console.log("State", this.state.searchTerm);
    let userSearch = event.target.value;
    this.setState({ searchTerm: userSearch });
    this.value = this.state.searchTerm;
    this.setState({ searchTerm: userSearch });
    console.log("SEARCHING...", userSearch);
    console.log("State", this.state.searchTerm);
    console.log("EVENT", event)
  }

  render() {
    return (
      <div>
        <NavBar
          employees={this.state.employees}
          handleSearching={this.handleSearch}
          employeeSearch={this.employeeSearch}
        />
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col" onClick={this.handleSort}>Name</th>
              {/* <Sort employees={this.state.employees} /> */}
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Message/Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(employee => {
              return (
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
              )
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Employees;
