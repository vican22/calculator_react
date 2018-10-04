import React, { Component } from "react";

const style = {
  display: "inline-block",
  color: "#000",
  border: "1px solid black",
  backgroundColor: "rgba(172,45,56, 0.7)",
  margin: "10px",
  padding: "10px",
  borderRadius: "50%",
  fontSize: "20px",
  height: "25px",
  width: "25px"
};

class Button extends Component {
  render() {
    return (
      <div
        style={style}
        onClick={this.props.onClick}
        data-value={this.props.value}
      >
        {this.props.label}
      </div>
    );
  }
}

export default Button;
