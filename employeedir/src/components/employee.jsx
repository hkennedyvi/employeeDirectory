import React, { Component } from "react";

class Employee extends Component {
  //We do not modify the state directly
  state = {
    date: this.props.employee.date,
    name: this.props.employee.name,
    email: this.props.employee.email,
    phone: this.props.employee.phone,
    imageUrl: "https://picsum.photos/100",
    tags: ["tag1", "tag2", "tag3"]
  };

  //Event Handler
  //   handleHire = () => {
  //     console.log("Hire Me clicked");
  //     //This method tells React the state of this component is going to change
  //     //React will schedule a call to the render method
  //     this.setState({ date: this.state.date + 1 });
  //   };

  styles = {
    fontSize: 100,
    fontWeight: "bold"
  };

  render() {
    // console.log("props", this.props);
    return (
      <div>
        <ul className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            {this.state.name}
            {this.state.email}
            {this.state.phone}
            <img src={this.state.imageUrl} alt="" />
            <span style={this.styles} className={this.getBadgeClasses()}>
              {this.formatDate()}
            </span>
            <button
              onClick={() => this.props.onHire(this.props.employee)}
              className="btn btn-primary btn-lg"
            >
              Hire Me
        </button>
        {/* Employee raises event, Employees handles event */}
        <button
          onClick={() => this.props.onDelete(this.props.employee.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Fire Me
        </button>
          </a>
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.employee.date === 10 ? "warning" : "primary";
    return classes;
  }

  formatDate() {
    const { date } = this.props.employee;
    return date === 10 ? <h1>The tenth</h1> : date;
  }
}

export default Employee;
