import React, { Component } from "react";

class Employee extends Component {

  state = {
    points: this.props.employee.points,
    name: this.props.employee.name,
    email: this.props.employee.email,
    phone: this.props.employee.phone,
    imageUrl: this.props.employee.imageUrl,
  };

  styles = {
    fontSize: 25,
    fontWeight: "bold"
  };

  render() {
    // console.log("props", this.props);
    return (
      <div>
        <ul className="list-group">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="list-group-item list-group-item-action">
            {this.state.name}
            {this.state.email}
            {this.state.phone}
            <img src={this.state.imageUrl} alt="" />
            <span style={this.styles} className={this.getBadgeClasses()}>
              {this.formatPoints()}
            </span>
            <button
              onClick={() => this.props.onIncrement(this.props.employee)}
              className="btn btn-primary btn-lg"
            >
              + Brownie Points
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.employee.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Remove
        </button>
          </a>
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.employee.points === 100 ? "warning" : "primary";
    return classes;
  }

  formatPoints() {
    const { points } = this.props.employee;
    return points === 100 ? <h1>One hundred</h1> : points;
  }
}

export default Employee;
