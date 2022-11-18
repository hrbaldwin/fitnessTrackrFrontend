import React, { useState } from "react";
import { creatingActivity } from "../api";

const CreateActivity = (props) => {
  const [newActivity, setNewActivity] = useState({
    name: "",
    description: "",
  });
  const { error, setError } = props;
  const handleChange = (event) => {
    setNewActivity({
      ...newActivity,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, description } = newActivity;

    const token = localStorage.getItem("token");
    const ourNewActivity = await creatingActivity(token, name, description);
    console.log(ourNewActivity);

    if (ourNewActivity.error) {
      setError(ourNewActivity);
    } else {
      setNewActivity({ name: "", description: "" });
      setError(null);
    }
  };

  return (
    <>
      <h2 className="newActivityHeader">create new activity</h2>
      <div className="newActivityFormDiv">
        <form onSubmit={handleSubmit} className="newActivityForm">
          <label>name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
          />{" "}
          <br></br>
          <label>description:</label>
          <textarea
            rows="5"
            cols="50"
            type="text"
            name="description"
            onChange={handleChange}
            required
          />{" "}
          <br></br>
          <button type="submit" className="newActivitySubmitButton">
            submit
          </button>
        </form>
      </div>
      {error ? <p>{error.error}</p> : null}
    </>
  );
};
export default CreateActivity;
