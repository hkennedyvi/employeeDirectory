import React from 'react';

const Results = (props) => {
 
    return (
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col" 
              onClick={props.handleSort}
              >Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Message/Remove</th>
            </tr>
          </thead>
          <tbody>
            {props.results.map(employee => (
               
              <tr key={employee.id}>
                <th scope="row"><img src={employee.thumbnail} alt=""></img></th>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>
                <button className="btn btn-info mr-2" onClick={() => props.handleMessage(employee.email)}><i className="fas fa-envelope"></i></button>
                  <button className="btn btn-danger ml-5" onClick={() => props.handleDelete(employee.id)}><i className="fas fa-times"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    )
}

export default Results;