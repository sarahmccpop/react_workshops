import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";
import React from "react";
class App extends React.Component {
  state = { counter: 0 };
  handleClick = () => {
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.steps,
    }));
  };
  render() {
    return (
      <>
        <ButtonClassComponent handleClick={this.handleClick} />
        <Display count={this.state.counter} />,
      </>
    );
  }
}

export default App;
class ButtonClassComponent extends React.Component {
  render() {
    return <button onClick={this.props.handleClick}>Click me</button>;
  }
}
class Display extends React.Component {
  state = { count: this.props.count };

  static getDeriveStateFromProps(props, state) {
    if (props.count !== state.count) {
      return { count: props.count };
    }
    return null;
  }
  render() {
    console.log("props", this.props);
    console.log("state", this.state.count);
    return <p>Button has been clicked: {this.state.count} </p>;
  }
}
