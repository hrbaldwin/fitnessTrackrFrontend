import React, { useState } from "react";
import { RegisterUser } from "../api";

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setRegisterInfo({
      ...registerInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = registerInfo;

    console.log(registerInfo);
    const registeredUser = await RegisterUser(username, password);
    console.log(registeredUser);
    const token = registeredUser.token;
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    localStorage.removeItem("username");
    localStorage.setItem("username", username);
    setRegisterInfo({ username: "", password: "" });
  };

  return (
    <>
      <h3>Register below</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input type="text" name="username" onChange={handleChange} required />
        <label htmlFor="password">password:</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          required
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default Register;
