import React, { useState } from "react";
import { AttachActivityToRoutine } from "../api";
import { useParams, Link } from "react-router-dom";

const RoutineActivities = (props) => {
  const routines = props.routines;
  const activities = props.activities;
  console.log(routines);
  let [submittedAdd, setSubmittedAdd] = useState({
    activityId: "",
    count: "",
    duration: "",
  });
  const { routineId } = useParams();

  const handleOptionChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    setSubmittedAdd({
      ...submittedAdd,
      [event.target.name]: event.target.value,
    });
  };
  console.log(routineId);
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

  const routineAttached = routines.find((routine) => {
    console.log(typeof routine.id);
    console.log(typeof routineId);
    return routine.id == routineId;
  });
  console.log(routineAttached);

  return (
    <>
      <div className="singleRoutine">
        <h2>{routineAttached.name}</h2>
        <p>{routineAttached.creatorName}</p>
        <p>{routineAttached.goal}</p>
      </div>
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
      <div className="attachedRoutineActivitiesDiv">
        {routineAttached && routineAttached.activities.length
          ? routineAttached.activities.map((activity, i) => {
              return (
                <div
                  className="attachedRoutineActivities"
                  key={`activity-routine${i}`}
                >
                  <h4
                    key={`activity-name${i}`}
                    className="activityRoutineHeader"
                  >
                    {activity.name}
                  </h4>
                  <p key={`activity-description${i}`}>{activity.description}</p>
                  <p key={`activity-duration${i}`}>
                    duration: {activity.duration}
                  </p>
                  <p key={`activity-count${i}`}>count: {activity.count}</p>

                  <Link
                    to={`/activityedit/${routineAttached.routineActivityId}`}
                  >
                    <button>edit count and duration</button>
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};
export default RoutineActivities;
