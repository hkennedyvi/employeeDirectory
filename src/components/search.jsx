import React from "react";

const Search = ({ employeeSearch }) => {
    return (
        <div className="mt-3 mr-5 float-right">
            <form className="search">
                <div className="form-group">
                    <input
                        value=""
                        // onChange={handleInputChange}
                        onChange={(event) => employeeSearch(event)}
                        placeholder="Find Employee..."></input>
                    {/* <button type="submit"
                        className="btn btn-success"
                        onClick={(e)encodeURI}
                    ><i className="fas fa-search"></i></button> */}
                </div>
            </form>
        </div>
    )
}

export default Search;

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