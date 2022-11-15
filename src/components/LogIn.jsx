import React, { useState } from "react";
import { logInUser } from "../api";

const LogIn = () => {
  const [logInInfo, setLogInInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setLogInInfo({ ...logInInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(logInInfo);
    setLogInInfo({ username: "", password: "" });
  };

  return (
    <>
      <h3>Login below</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input type="text" name="username" required />
        <label htmlFor="password">password:</label>
        <input type="password" name="password" required />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default LogIn;
