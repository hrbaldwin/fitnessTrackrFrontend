import React, { useState } from "react";

const SingleRoutine = (props) => {
  const routine = props.routine;
  const activities = props.activities;
  let [toggleActivities, setToggleActivities] = useState(false);
  let[addActivity, setAddActivity] = useState(false)
  console.log(activities)

  const handleChange = (event) => {
    event.preventDefault()
    return setToggleActivities(!toggleActivities);
  };
  const handleChange2 = (event) => {
    event.preventDefault()
    return setAddActivity(!addActivity)
  }

  return (
    <>
      <div className="singleRoutine">
        <h3>{routine.name}</h3>
        <p>{routine.creatorName}</p>
        <p>{routine.goal}</p>
      </div>
      <div>
        <button onClick={handleChange}>see activities for this routine</button>
        <button onChange={handleChange2}>add activity to routine</button>
    {toggleActivities ? <div className="routineActivitiesDiv">
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
        </div> :null}
        {addActivity ? <div>
      <form>
          <label htmlFor="activity">choose activity:</label>
        {activities.length ? ( activities.map ((activity) => {
          return (<option key={`activity-add-${activity.id}`}>{activity.name}</option>)
        })) :null}
        </form>
        </div> :null}
        
      </div>
    </>
  );
};

export default SingleRoutine;
