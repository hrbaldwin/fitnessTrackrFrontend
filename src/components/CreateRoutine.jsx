import React, { useState } from "react";
import { creatingRoutine } from "../api";

const CreateRoutine = () => {
  const [newRoutine, setNewRoutine] = useState({
    name: "",
    description: "",
    isPublic: null,
  });
  const [currentError, setCurrentError] = useState(null);

  const handleChange = (event) => {
    setNewRoutine({
      ...newRoutine,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, goal, isPublic } = newRoutine;

    const token = localStorage.getItem("token");
    const ourNewRoutine = await creatingRoutine(token, name, goal, isPublic);
    console.log(ourNewRoutine);
    setNewRoutine({ name: "", goal: "", isPublic: null });
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
          <label htmlFor="isPublic">public?</label>
          <select name="isPublic" onChange={handleChange}>
            <option value={null}> please select an option below</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type="submit" className="newRoutineSubmitButton">
            submit
          </button>
        </form>
      </div>
    </>
  );
};
export default CreateRoutine;
