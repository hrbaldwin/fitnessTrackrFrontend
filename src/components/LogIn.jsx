import React, { useState } from "react";
import { logInUser } from "../api";

const LogIn = () => {
  const [logInInfo, setLogInInfo] = useState({
    username: "",
    password: "",
  });
  
  const handleChange = (event) => {
      console.log(event.target.name, event.target.value)
      setLogInInfo({ ...logInInfo, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const {username, password} = logInInfo;

    console.log(logInInfo);
    const registeredUser = await logInUser(username, password);
    console.log(registeredUser)
      const token = registeredUser.token;
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
    setLogInInfo({ username: "", password: "" });
    
  };


  return (
    <>
      <h3>Login below</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input type="text" name="username" onChange = {handleChange} required />
        <label htmlFor="password">password:</label>
        <input type="password" name="password" onChange = {handleChange} required />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default LogIn;
