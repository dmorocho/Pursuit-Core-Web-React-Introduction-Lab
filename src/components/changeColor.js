import React from "react";

class DivColor extends React.Component {
  state = {
    color:
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
  };

  changeColor = () => {
    this.setState({
      color:
        "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    });
  };
  render() {
    return (
      <div
        className="Color"
        style={
        {backgroundColor: {this.DivColor.color}}}
      >
        New Color
        <button
          value="show me the rainbow"
          onChange={this.changeColor}
        ></button>
      </div>
    );
  }
}
export default DivColor;
