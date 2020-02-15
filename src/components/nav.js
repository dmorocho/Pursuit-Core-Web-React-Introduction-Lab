import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div
        className="Nav"
        style={{ backgroundColor: "lightblue", padding: "20px" }}
      >
        <button> What is Pursuit</button>
        <button> Create and account</button>
        <button> sign in</button>
      </div>
    );
  }
}
export default Nav;
