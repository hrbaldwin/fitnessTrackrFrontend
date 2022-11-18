import React, { useState } from "react";
import { editRoutineActivity, DeleteRoutineActivity } from "../api";
import { useParams } from "react-router-dom";

const ActivityEdit = () => {
  let [updateActivity, setUpdateActivity] = useState({
    count: "",
    duration: "",
  });
  const handleChange = (event) => {
    console.log(event.target.value, event.target.name);
    setUpdateActivity({
      ...updateActivity,
      [event.target.name]: event.target.value,
    });
  };
  const { routineActivityId } = useParams();
console.log(routineActivityId)
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { count, duration } = updateActivity;
    const token = localStorage.getItem("token");
    console.log(token);
    const ourEditedRoutineActivity = await editRoutineActivity(
      token,
      count,
      duration,
      routineActivityId
    );
    console.log(ourEditedRoutineActivity);
    setUpdateActivity({ count: "", duration: "" });
  };
  console.log(updateActivity);
  async function handleDelete(e) {
    e.preventDefault();
    console.log(e, "D");
    const toDelete = e.target.id;

    const token = localStorage.getItem("token");
    console.log(e);
    const deleted = await DeleteRoutineActivity(toDelete, token);
  }
  return (
    <>
      <h2>hi</h2>
      <form onSubmit={handleSubmit}>
<label>count:</label>
<input type="number" name="count" onChange={handleChange} required/>
<label>duration:</label>
<input type="number" name="duration" onChange={handleChange} required/>
<button type="submit">submit</button>
<button onClick={handleDelete} id={routineActivityId ? `${routineActivityId}`:null} >delete routine activity</button>
      </form>
    </>
  );
};
export default ActivityEdit;
