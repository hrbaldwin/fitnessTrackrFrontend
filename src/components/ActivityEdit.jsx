import React, { useState } from "react";
import { editRoutineActivity } from "../api";
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

  const handleSubmit2 = async (event) => {
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
  return (
    <>
      <h2>hi</h2>
    </>
  );
};
export default ActivityEdit;
