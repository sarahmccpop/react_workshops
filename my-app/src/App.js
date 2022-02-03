import logo from "./logo.svg";
import "./App.css";
import { render, unstable_renderSubtreeIntoContainer } from "react-dom";
import React, { useState, useEffect } from "react";

async function getData(url) {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response.status);
}

export default function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  // the empty array as a 2nd paramenter in useEffect means it will only run the callback only once

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>All my users: count: {users.length}</h1>
      <Users users={users} />
      {error && <p>Sorry, the users failed to load.</p>}
    </>
  );
}

const Users = ({ users }) =>
  users.map((user) => <User user={user} key={user.id} />);

const User = ({ user: { name, email, phone } }) => (
  <ul>
    <strong>{name}</strong>
    <li>{email}</li>
    <li>{phone}</li>
  </ul>
);
