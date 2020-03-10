import React, { Component } from "react";

class Employee extends Component {
     //We do not modify the state directly
  state = {
    date: 10,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  //Event Handler
  handleHire = () => {
    console.log("Hire Me clicked");
    //This method tells React the state of this component is going to change
    //React will schedule a call to the render method
    this.setState({ date: this.state.date + 1 })
  }
 

  //Helper Method
  renderTags() {
    if (this.state.tags.length === 0) return <p>there are no tags</p>;
    return (
      <ul>
        {/* Get each tag and map it to a list item  */}
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  styles = {
    fontSize: 100,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatDate()}
        </span>
        <button onClick={this.handleHire} className="btn btn-primary btn-lg">
          Hire Me
        </button>
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.date === 10 ? "warning" : "primary";
    return classes;
  }

  formatDate() {
    const { date } = this.state;
    return date === 10 ? <h1>The tenth</h1> : date;
  }
}

export default Employee;
