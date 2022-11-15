import React, { useState } from "react";
import { creatingActivity } from "../api";

const CreateActivity = () => {
  const [newActivity, setNewActivity] = useState({
    name: "",
    description: "",
  });

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
    setNewActivity({ name: "", description: "" });
  };
  return (
    <>
      <h2>create new activity</h2>
      <form onSubmit={handleSubmit}>
        <label>name:</label>
        <input type="text" name="name" onChange={handleChange} required />
        <label>description:</label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          required
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default CreateActivity;
