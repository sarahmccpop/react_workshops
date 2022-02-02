import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";
import React from "react";

// this is an element which will be console logged. In the console you will see this as an Object
const Hello = <h1>Hello</h1>;
// we can also use this element in the return function by putting it in curly braces
// elements are immutable so you can't change it. If you want to change it, you must create a new element to update the UI

// this is a component (function App and all contents). It lets you split the UI into independent reusable pieces
// element describes what you want to see on the screen e.g. a <p></p>
// there are two types of components - class based and functional components. Below is a functional component.
function App() {
  console.log(Hello);
  return [<ClassComponent />, <FuncArrow />, <FuncArrow2Lines />];
}

export default App;

// this is a class based component. Class components inherit from the React Library, so use extends React.Component
// render is the method which is required for you to override when you are defining class based components
// when using a class component that extends React, you must remember to include import React from 'react'; at the top of the page
class ClassComponent extends React.Component {
  render() {
    return <h1>Class component</h1>;
  }
}

// arrow functions. what is after the arrow is returned. This is a one-liner and the return is implicit
const FuncArrow = () => <h1>Func component</h1>;

// another way to write arrow functions when you have a function that will go over 2 lines, you can use brackets
// a single argument or prop does not need to be in brackets but it looks better if they are. If you have more than 1 argument or prop, they need to be within brackets
const FuncArrow2Lines = (props) => {
  return <h1>Func over 2 lines</h1>;
};

// look up w3 schools semantic elements. As javascript expressions cannot return multiple expressions, we need to wrap the ClassComponent and FuncArrow (s) in an enclosing tag. The enclosing tag needs to be a semantic element
// we can also return an array e.g.
//  return [
// <ClassComponent />,
// <FuncArrow />,
// <FuncArrow2Lines />
// ]
