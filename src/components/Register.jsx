import React, { useState } from "react";
import { RegisterUser } from "../api";

const Register = (props) => {
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    password: "",
  });
  const { error, setError } = props;
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
    if (registeredUser.error) {
      setError(registeredUser);
    } else {
      const username = registeredUser.user.username;
      const token = registeredUser.token;
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
      localStorage.removeItem("username");
      localStorage.setItem("username", username);
      setRegisterInfo({ username: "", password: "" });
      setError(null);
    }
  };

  return (
    <>
      <h3 className="registerHeader">Register below</h3>
      <div className="registerFormDiv">
        <form onSubmit={handleSubmit} className="registerForm">
          <label htmlFor="username">username:</label>
          <input type="text" name="username" onChange={handleChange} required />
          <br></br>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />{" "}
          <br></br>
          <button type="submit" className="registerSubmit">
            submit
          </button>
        </form>
      </div>
      {error ? <p className="errorMessage">{error.error}</p> : null}
    </>
  );
};
export default Register;
