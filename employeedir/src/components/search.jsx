// import React, { Component } from 'react';
import React, { useState } from 'react';

// class Search extends Component {

//     state = {
//         searchTerm: "search test"
//     }

//     handleSearch = event => {
//         event.preventDefault();
//         console.log("You searched for: " + this.state.searchTerm);
//     }
//     handleInputChange = event => {
//         let userSearch = event.target.value;
//         if (userSearch === "hello") {
//             alert("Success!");
//         } else
//             console.log(userSearch);
//     };

//     render() {
//         return (
//             <div className="mt-3 mr-5 float-right">
//                 <form className="search">
//                     <div className="form-group">
//                         <input
//                             value={this.state.searchTerm}
//                             // onChange={handleInputChange}
//                             onChange={this.props.handleSearching}
//                             placeholder="Find Employee..."></input>
//                         <button type="submit"
//                             className="btn btn-success"
//                             onClick={this.handleSearch}
//                         ><i className="fas fa-search"></i></button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// export default Search;

function Search(props) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = event => {
        event.preventDefault();
        console.log("You searched for: " + searchTerm);
    }
    const handleInputChange = event => {
        let userSearch = event.target.value.toLowerCase();
        let employees = props.employees.employees;
        setSearchTerm(userSearch);
        employees.map(employee => {
            let firstName = employee.name.toLowerCase().split(" ")[0];
            let lastName = employee.name.toLowerCase().split(" ")[1];
            if (userSearch === firstName) {
                alert("We have an employee with this first name");
            } else if (userSearch === lastName) {
                alert("We have an employee with this last name");
            } else return employee;
        })
    };

    return (

        <div className="mt-3 mr-5 float-right">
            <form className="search">
                <div className="form-group">
                    <input
                        value={searchTerm}
                        // onChange={handleInputChange}
                        onChange={handleInputChange}
                        placeholder="Find Employee..."></input>
                    <button type="submit"
                        className="btn btn-success"
                        onClick={handleSearch}
                    ><i className="fas fa-search"></i></button>
                </div>
            </form>
        </div>
    )
}

export default Search;