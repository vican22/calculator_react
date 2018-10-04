import React, { Component } from "react";

const style = {
  color: "white",
  fontWeight: "italic",
  fontSize: "32px",
  padding: "35px",
  textAlign: "right"
};

class Display extends Component {
  render() {
    return <div style={style}>{this.props.value}</div>;
  }
}

export default Display;
