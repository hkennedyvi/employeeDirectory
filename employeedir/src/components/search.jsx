import React, { useState } from 'react';

function Search() {
 
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = event => {
        event.preventDefault();
        console.log("You searched for: " + searchTerm);
    }
    const handleInputChange = event => {
        let userSearch = event.target.value;
        setSearchTerm(userSearch);
        console.log(userSearch);
    };

    return (
        <div className="mt-3 mr-5 float-right">
            <form className="search">
                <div className="form-group">
                    <input
                        value={searchTerm}
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