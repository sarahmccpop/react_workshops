import "./App.css";
import { render } from "react-dom";
import React, { useState, useEffect } from "react";

const MAX_COUNT = 10;

// this is a functional component which can have state
export default function App() {
  const [increment, setIncrement] = useState(0);
  const [count, setCount] = useState(0);
  //const [count2, setCount2] = useState(0);
  const [isMaxCount, setIsMaxCount] = useState(false); // when max count is true, we want to display a warning

  // this returns setCount incremented
  const handleClick = () => {
    // Promise.resolve().then(() => {
    // this calls 2 render cycles - visible in the console
    //setCount(count + 10);
    setIncrement((increment) => increment + 1);
    // setCount(count + increment);
  };
  // useEffect can accept 2 arguments. First one is the callback - which is this function setCount(count + increment); in our case
  // if we use it with 1 argument here we create an infinite loop, so to avoid this we the 2nd arguument which is a dependency array
  // It is an array of values that the affect depends onabort, in our case it is the increment
  useEffect(() => setCount(count + increment), [increment]);
  // useEffect(() => {
  //   if (count > MAX_COUNT) {
  //     setIsMaxCount(true);
  //   }
  // }, [count]);

  // this can also be written in a one liner with a logical operator
  // React is clever enough to give you a warning if you forget to add in the array
  useEffect(() => count > MAX_COUNT && setIsMaxCount(true), [count]);

  console.log("render", increment, count);

  return (
    <>
      <Button handleClick={handleClick} />
      <Display count={count} />
      {isMaxCount && <strong>Max count has been reached</strong>}
    </>
  );
}
// we pass handleClick as an argument which is called on click
const Button = ({ handleClick }) => (
  <button onClick={handleClick}>Click me</button>
);
const Display = ({ count }) => <p>Button has been clicked: {count}</p>;
