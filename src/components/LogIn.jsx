import React, { useState } from "react";
import { logInUser } from "../api";
import { Link } from "react-router-dom";

const LogIn = (props) => {
  const [logInInfo, setLogInInfo] = useState({
    username: "",
    password: "",
  });
  const { error, setError } = props;
  //const [currentError, setCurrentError]=useState(null)

  const handleChange = (event) => {
    //console.log(event.target.name, event.target.value)
    setLogInInfo({ ...logInInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = logInInfo;

    console.log(logInInfo);
    const registeredUser = await logInUser(username, password);
    console.log(registeredUser);

if (registeredUser.error){
    setError(registeredUser)
}else{
    const token = registeredUser.token;
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    localStorage.removeItem("username");
    localStorage.setItem("username", username);
    setLogInInfo({ username: "", password: "" });

setError(null)
}

  };

  

  return (
    <>
      <h3 className="logInHeader">Login below</h3>
      <div className="logInOrUpFormDiv">
        <form onSubmit={handleSubmit} className="logInOrUpForm">
          <label htmlFor="username">username:</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            required
          />{" "}
          <br></br>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />{" "}
          <br></br>
          <button type="submit" className="submitButton">
            submit
          </button>
        </form>{" "}
      </div>
      {error ? <p>{error.error}</p> :null}
      <div className="registerButtonDiv">
        <Link to="/users/register">
          {" "}
          <button className="registerButton">
            not registered? create account here.
          </button>{" "}
        </Link>
      </div>
    </>
  );
};

export default LogIn;
