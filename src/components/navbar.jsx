import React from "react";

const NavBar = (props) => {
    
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand mb-0 h1">EMPLOYEE DIRECTORY<i className="fas fa-users ml-3"></i></div>
        <div className="mt-3 mr-5 float-right">
            <form className="search">
                <div className="form-group">
                    <input
                        value={props.search}
                        onChange={e => props.handleInputChange(e)}
                        placeholder="Find Employee..."></input>
                    <button type="submit"
                        className="btn btn-success"
                        onClick={e => props.handleSubmit(e)}
                    ><i className="fas fa-search"></i></button>
                </div>
            </form>
        </div>
        </nav>
    );
  };

export default NavBar;
