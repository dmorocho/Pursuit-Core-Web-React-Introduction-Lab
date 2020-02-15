import React from "react";

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    randomcolors: ["green", "blue", "yellow", "cyan"],
    currentColor: "lavender"
  };
  handleFirstName = e => {
    this.setState({
      firstName: e.target.value
    });
  };
  handlelastName = e => {
    this.setState({
      lastName: e.target.value
    });
  };
  changeColor = e => {
    let rancolor = Math.floor(Math.random());
  };

  render() {
    return (
      <form id={this.state.currentColor}>
        <div className="userInput">
          My name is: {this.state.firstName}
          My last name is: {this.state.lastName}
        </div>

        <input placeholder="Enter first name" onChange={this.handleFirstName} />
        <input placeholder="Enter last name" onChange={this.handlelastName} />
        <button onClick={this.changeColor}></button>
      </form>
    );
  }
}
export default Form;
