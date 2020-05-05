import React, { Component } from "react";
import API from "../utils/API";
import NavBar from "../components/navbar";
import Results from "../components/results";

class Directory extends Component {

    state = {
        employees: [],
        results: [],
    };

    // When the component mounts, get a list of employees
    componentDidMount() {
        API.getBaseEmployees()
            .then(res => {
                const newArr = res.data.results.map((employee, id) => {
                    return {
                        id: id++,
                        name: employee.name.first + " " + employee.name.last,
                        lastName: employee.name.last,
                        email: employee.email,
                        thumbnail: employee.picture.thumbnail,
                        phone: employee.phone,
                        cell: employee.cell,
                        location: employee.location.state,
                        age: employee.dob.age
                    }
                })
                this.setState({ employees: newArr, results: newArr })
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {

        const filter = event.target.value;
        const searchedResults = this.state.employees.filter(item => {
          let values = Object.values(item)
            .join("")
            .toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ results: searchedResults });
        console.log("Matches")
        console.log(searchedResults);
      
    };

    handleSubmit = event => {
        event.preventDefault();
        let matchCount = this.state.results.length;
        matchCount !== 1 ?
        alert("There are " + matchCount + " employee matches") :
        alert("There is " + matchCount + " employee match");
    };

    handleSort = () => {
        let employees = [...this.state.results];
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
            this.setState({ results: employees });
        };
        let descendSort = () => {
            employees.sort((b, a) => {
                let employeeA = a.name.toLowerCase().split(" ")[1];
                let employeeB = b.name.toLowerCase().split(" ")[1];
                return (employeeA < employeeB) ? -1 : (employeeA > employeeB) ? 1 : 0;
            });
            this.setState({ results: employees });
        }
        if (asc) {
            ascendSort();
        } else if (desc) {
            descendSort();
        } else {
            descendSort();
        }
    }

    handleMessage = employeeEmail => {
        const el = document.createElement('textarea');
        el.value = employeeEmail;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert(employeeEmail + " is copied to your clipboard");
    }

    handleDelete = employeeId => {
        const employees = this.state.results.filter(c => c.id !== employeeId);
        this.setState({ results: employees });
    };

    render() {
        return (
            <div>
                <NavBar
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}
                />
                <Results
                    results={this.state.results}
                    handleSort={this.handleSort}
                    handleDelete={this.handleDelete}
                    handleMessage={this.handleMessage}
                />
            </div>
        );
    }
}

export default Directory;
