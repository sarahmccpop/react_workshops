import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";
import React from "react";

// this is an element which will be console logged. In the console you will see this as an Object
const Hello = <h1>Hello</h1>;
// we can also use this element in the return function by putting it in curly braces
// elements are immutable so you can't change it. If you want to change it, you must create a new element to update the UI
//   console.log(Hello);
// this is a component (function App and all contents). It lets you split the UI into independent reusable pieces
// element describes what you want to see on the screen e.g. a <p></p>
// there are two types of components - class based and functional components. Below is a functional component.
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
        <ButtonClassComponent
          today={"Wednesday"}
          tomorrow={"Thursday"}
          handleClick={this.handleClick}
        />
        ,
        <Display count={this.state.counter} />,
        <FuncArrow />, <FuncArrow2Lines />
      </>
    );
  }
}

export default App;

// this is a class based component. Class components inherit from the React Library, so use extends React.Component
// render is the method which is required for you to override when you are defining class based components
// when using a class component that extends React, you must remember to include import React from 'react'; at the top of the page
class ButtonClassComponent extends React.Component {
  // you must call the props constructor and use super(props) because otherwise props will be undefined and you will not be able to use it
  // props are input arguments that are passed into components

  // constructor(props) {
  //   super(props);
  //   this.state = { counter: 0 };
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // handleClick() {
  //   console.log("Handle clicked", this);
  // }
  //handleClick = () => console.log("handleClick", this);
  // state = { counter: 0 }; state is removed from here where it is private to App component where it will be public

  // handleClick = () => {
  //   // const prevState = this.state.counter;
  //   // this.setState({ counter: prevState + 1 });
  //   // this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  //   this.setState(
  //     (prevState, props) => ({ counter: prevState.counter + props.steps }),
  //     () => console.log("callback", this.state.counter)
  //   );
  //   console.log("handleClick", this.state.counter);
  // };

  render() {
    //console.log("render", this.state.counter);
    //console.log(this.props); // here you can see props is an object with 2 properties
    // you can also assign the props to a const so that they can be accessed directly
    const { today, tomorrow } = this.props;
    // this has been removed from return but keeping for reference
    // Today is {this.props.today}, Tomorrow is {this.props.tomorrow}. Using a
    // const - today is {today} and tomorrow is {tomorrow}
    return <button onClick={this.props.handleClick}>Click me</button>;
  }
}

// arrow functions. what is after the arrow is returned. This is a one-liner and the return is implicit
const FuncArrow = () => <h4>Func component</h4>;

// another way to write arrow functions when you have a function that will go over 2 lines, you can use brackets
// a single argument or prop does not need to be in brackets but it looks better if they are. If you have more than 1 argument or prop, they need to be within brackets
const FuncArrow2Lines = (props) => {
  return <h4>Func over 2 lines</h4>;
};

// look up w3 schools semantic elements. As javascript expressions cannot return multiple expressions, we need to wrap the ClassComponent and FuncArrow (s) in an enclosing tag. The enclosing tag needs to be a semantic element
// we can also return an array e.g.
//  return [
// <ClassComponent />,
// <FuncArrow />,
// <FuncArrow2Lines />
// ]
// using just an array with return errors in the console so another way to return an array with keys is to use React.Fragment
// return (
//   <React.Fragment>
//     <ClassComponent />, <FuncArrow />, <FuncArrow2Lines />
//   </React.Fragment>
// );
// OR
// // because this is so handy they developed a shortcut for this which is -
// return (
//   <>
//     <ClassComponent />, <FuncArrow />, <FuncArrow2Lines />
//   </>
// );

// When should you use functional or class components?
// with the introductions of react hooks, functional components now have the ability to store state and can perform side effects
// functional components are used more now. With functional components, you use have only the functionality you need, but class based come loaded with React functions already

class Display extends React.Component {
  render() {
    // currently the state is private so Display can't access it
    // so we need to lift state up to the App component
    return <p>Button has been clicked: {this.props.count} </p>;
  }
}
