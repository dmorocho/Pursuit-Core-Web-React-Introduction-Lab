import React from "react";

class ContactCard extends React.Component {
  render() {
    const mystyle = {
      border: "2px solid",
      borderRadius: "25px",
      width: "400px",
      margin: "10px"
    };
    return (
      <div style={mystyle}>
        <h3>Jordan Walker</h3>
        <p>React Developer</p>
        <p>lorem ipsum</p>
      </div>
    );
  }
}
export default ContactCard;
