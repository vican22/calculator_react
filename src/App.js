import React, { Component } from "react";
import math from "mathjs";
import "./App.css";

import Button from "./Button";
import Display from "./Display";
import Buttons from "./Buttons";

class App extends Component {
  state = {
    store: [],
    history: [],
    error: null
  };

  calcValue = () => {
    let result = this.state.store.join("");
    //console.log(result);

    result = String(math.eval(result));

    if (this.state.store[0] === undefined) {
      this.setState({
        store: []
      });
    } else {
      this.setState({
        store: [result],
        history: [...this.state.history, result]
      });
    }
  };

  handleClick = e => {
    try {
      const val = e.target.getAttribute("data-value");
      // console.log(val);

      if (val === "equal") {
        this.calcValue();
        // this.setState({
        //   store: []
        // });
      } else if (val === "clear") {
        this.setState({
          store: []
        });
      } else if (val === "sign") {
        let res = this.state.store.join("");
        res *= -1;

        this.setState({
          store: [res]
        });
        console.log(res);
      } else {
        let newStore = this.state.store;
        // console.log(val);
        newStore.push(val);
        //console.log(newStore[newStore.length - 1]);
        //const operators = ["+", "-", "*", "/"];

        // console.log(newStore);
        // if (val === "+" || val === "-" || val === "*" || val === "*") {
        //   if (newStore[newStore.length - 2] === val) {
        //     newStore.pop();
        //   }
        // }

        if (
          val === "+" ||
          val === "-" ||
          val === "*" ||
          val === "*" ||
          val === "%" ||
          val === "."
        ) {
          if (newStore[newStore.length - 2] === newStore[newStore.length - 1]) {
            newStore.pop();
            //newStore = this.state.store;
          }
        }

        console.log(newStore);
        this.setState({
          store: newStore
        });
      }
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const list = this.state.history.map((val, index) => {
      // console.log(val);
      return <li key={index}>{val} </li>;
    });

    if (this.state.error) {
      return <h1>Invalid operations plese reload the page</h1>;
    } else {
      return (
        <div className="App">
          <div className={"Display"}>
            <Display value={this.state.store} />
          </div>
          <Buttons>
            <Button onClick={this.handleClick} value="clear" label="AC" />
            <Button onClick={this.handleClick} value="sign" label="+/-" />
            <Button onClick={this.handleClick} value="%" label="%" />
            <Button onClick={this.handleClick} value="/" label="/" />
            <div className="Number">
              <Button onClick={this.handleClick} value="7" label="7" />
              <Button onClick={this.handleClick} value="8" label="8" />
              <Button onClick={this.handleClick} value="9" label="9" />
              <Button onClick={this.handleClick} value="*" label="X" />
            </div>
            <Button onClick={this.handleClick} value="4" label="4" />
            <Button onClick={this.handleClick} value="5" label="5" />
            <Button onClick={this.handleClick} value="6" label="6" />
            <Button onClick={this.handleClick} value="-" label="-" />
            <div className="Number">
              <Button onClick={this.handleClick} value="1" label="1" />
              <Button onClick={this.handleClick} value="2" label="2" />
              <Button onClick={this.handleClick} value="3" label="3" />
              <Button onClick={this.handleClick} value="+" label="+" />
            </div>
            <Button onClick={this.handleClick} value="0" label="0" />
            <Button onClick={this.handleClick} value="." label="," />
            <Button onClick={this.handleClick} value="(" label="(" />
            <Button onClick={this.handleClick} value=")" label=")" />
            <div className="Number">
              <Button onClick={this.handleClick} value="equal" label="=" />
            </div>
          </Buttons>

          <ul className="History">{list}</ul>
        </div>
      );
    }
  }
}

export default App;
