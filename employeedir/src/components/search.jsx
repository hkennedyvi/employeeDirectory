import React, { useState } from 'react';

function Search() {
//     const [searchTerm, setSearchTerm] = useState();


// //   const handleSearch = event => {
// //     console.log("hello");
// //   }



    return (
        <div>
            <form className="search">
                <div className="form-group">
                    <input placeholder="Search Employees..."></input>
                    <button type="submit" 
                    className="btn btn-success" 
                    // onClick={this.handleSearch}
                    >ENTER</button>
                </div>
            </form>
        </div>
    )
}

export default Search;