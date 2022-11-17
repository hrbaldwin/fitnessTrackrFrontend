import React, { useState } from "react";
import { AttachActivityToRoutine } from "../api";
import { useParams } from "react-router-dom";

const RoutineActivities = (props) => {
  const routines = props.routines;
  console.log(routines);
  let [submittedAdd, setSubmittedAdd] = useState({
    activityId: "",
    count: "",
    duration: "",
  });
  const { routineId } = useParams();
  const activities = props.activities;
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { activityId, count, duration } = submittedAdd;
    console.log(activityId);
    const newlyAdded = await AttachActivityToRoutine(
      routineId,
      activityId,
      count,
      duration
    );
    console.log(newlyAdded);
    setSubmittedAdd({ activityId: "", count: "", duration: "" });
  };
  const handleOptionChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    setSubmittedAdd({
      ...submittedAdd,
      [event.target.name]: event.target.value,
    });
  };
  //   LEFT OFF HERE!!!!!!!!!
  //   const routineAttached = (routineId) => {
  const routineSelected = routines.filter((routine) => {
    return routine.routineId === routineId;
  });
  console.log(routineSelected);
  // return routine.routineId === routineId
  //   };
  return (
    <>
      <div className="routineActivityFormDiv">
        <form onSubmit={handleSubmit} className="routineActivityForm">
          <label htmlFor="activity">choose activity:</label>
          <select
            name="activityId"
            onChange={handleOptionChange}
            className="activityDrop"
          >
            {activities.length
              ? activities.map((activity) => {
                  return (
                    <option
                      key={`activity-add-${activity.id}`}
                      value={activity.id}
                    >
                      {activity.name}
                    </option>
                  );
                })
              : null}{" "}
          </select>{" "}
          <br></br>
          <label>count:</label>{" "}
          <input
            type="number"
            name="count"
            onChange={handleOptionChange}
            required
          />{" "}
          <br></br>
          <label>duration:</label>
          <input
            type="number"
            name="duration"
            onChange={handleOptionChange}
            required
          />{" "}
          <br></br>
          <button type="submit" className="addToButton">
            add to routine
          </button>
        </form>
      </div>
    </>
  );
};
export default RoutineActivities;
