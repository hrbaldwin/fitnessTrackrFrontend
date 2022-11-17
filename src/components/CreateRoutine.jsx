import React, { useState } from "react";
import { creatingRoutine } from "../api";

const CreateRoutine = () => {
  const [newRoutine, setNewRoutine] = useState({
    name: "",
    description: "",
  });

 const handleChange = (event) => {
    setNewRoutine({
      ...newRoutine,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, goal } = newRoutine;

    const token = localStorage.getItem("token");
    const ourNewRoutine = await creatingRoutine(token, name, goal);
    console.log(ourNewRoutine);
    setNewRoutine({ name: "", goal: "" });
  };

  return (
    <>
      <h2 className="newRoutineHeader">create new routine</h2>
      <div className="newRoutineFormDiv">
        <form onSubmit={handleSubmit} className="newRoutineForm">
          <label>name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
          />{" "}
          <br></br>
          <label>goal:</label>
          <textarea
            type="text"
            name="goal"
            rows="5"
            cols="50"
            onChange={handleChange}
            required
          />
          <br></br>
          <button type="submit" className="newRoutineSubmitButton">
            submit
          </button>
        </form>
      </div>
    </>
  );
};
export default CreateRoutine;
