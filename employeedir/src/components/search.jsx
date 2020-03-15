import React, { useState } from 'react';

function Search() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = event => {
        event.preventDefault();
        console.log("You searched for: " + searchTerm);
    }
    const handleInputChange = event => {
        setSearchTerm(event.target.value);
        console.log(searchTerm);
    };

    return (
        <div>
            <form className="search">
                <div className="form-group">
                    <input
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder="Search Employees..."></input>
                    <button type="submit"
                        className="btn btn-success"
                        onClick={handleSearch}
                    >ENTER</button>
                </div>
            </form>
        </div>
    )
}

export default Search;