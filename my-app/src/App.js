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
  render() {
    // currently the state is private so Display can't access it
    // so we need to lift state up to the App component
    return <p>Button has been clicked: {this.props.count} </p>;
  }
}
