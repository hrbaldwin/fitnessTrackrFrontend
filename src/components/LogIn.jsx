import React from "react";
import { logInUser } from "../api";

const LogIn = () => {
    async function handleSubmit(event) {
        try {
          event.preventDefault();
          const username = event.target[0].value;
          const password = event.target[1].value;
          const registeredUser = await logInUser(username, password);
          const token = registeredUser.token;
          localStorage.removeItem("token");
          localStorage.setItem("token", token);
        } catch (error) {
          console.log(error);
        }
      }


    return(
        <>
        <h3>Login below</h3>
        <form let onSubmit>
        <label>username:</label>
        <input />
        <label>password:</label>
        <input />
        </form>
        </>
    );
    
};

export default LogIn;