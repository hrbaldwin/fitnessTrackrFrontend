import React, { useState } from "react";
import { AttachActivityToRoutine } from "../api";
import { useParams } from "react-router-dom";

const SingleRoutine = (props) => {
  const routine = props.routine;
  const activities = props.activities;
  let [toggleActivities, setToggleActivities] = useState(false);
  let [addActivity, setAddActivity] = useState(false);
  let [submittedAdd, setSubmittedAdd] = useState({
    activityId: "",
    count: "",
    duration: "",
  });
  const { routineId } = useParams();

  const handleChange = (event) => {
    event.preventDefault();
    return setToggleActivities(!toggleActivities);
  };
  const handleChange2 = (event) => {
    event.preventDefault();
    return setAddActivity(!addActivity);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { activityId, count, duration } = submittedAdd;
    console.log(activityId);
    const newlyAdded = await AttachActivityToRoutine(
      routine.id,
      activityId,
      count,
      duration
    );
    console.log(newlyAdded);
    setSubmittedAdd({ activityId: "", count: "", duration: "" });
  };
  const handleOptionChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name)
    //console.log(event.target)
    // let filteredActivities = activities.filter((activity) => {
    //   return activity.name == event.target.value;
  //   });
  //   console.log(filteredActivities);
  //console.log(routine.activities);
setSubmittedAdd({...submittedAdd,[event.target.name]:event.target.value})  
};
  
console.log(submittedAdd)
  return (
    <>
      <div className="singleRoutine">
        <h3>{routine.name}</h3>
        <p>{routine.creatorName}</p>
        <p>{routine.goal}</p>
      </div>
      <div>
        <button onClick={handleChange}>see activities for this routine</button>
        <button onClick={handleChange2}>add activity to routine</button>
        {toggleActivities ? (
          <div className="routineActivitiesDiv">
            {routine && routine.activities.length
              ? routine.activities.map((activity, i) => {
                  return (
                    <div
                      className="routineActivities"
                      key={`activity-routine${i}`}
                    >
                      <h4
                        key={`activity-name${i}`}
                        className="activityRoutineHeader"
                      >
                        {activity.name}
                      </h4>
                      <p key={`activity-description${i}`}>
                        {activity.description}
                      </p>
                      <p key={`activity-duration${i}`}>
                        duration: {activity.duration}
                      </p>
                      <p key={`activity-count${i}`}>count: {activity.count}</p>
                    </div>
                  );
                })
              : null}
          </div>
        ) : null}
        {addActivity ? (
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="activity">choose activity:</label>
              <select  name='activityId' onChange={handleOptionChange}>
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
              </select>
             <label>count:</label> <input type="number" name="count" onChange={handleOptionChange} required />
              <label>duration:</label><input type="number" name="duration" onChange={handleOptionChange} required/>
              <button type="submit">add to routine</button>
            </form>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SingleRoutine;
