import React, { useState } from "react";

const SingleRoutine = (props) => {
  const routine = props.routine;
  let [toggleActivities, setToggleActivities] = useState(true);

  const handleChange = () => {
    return setToggleActivities(!toggleActivities);
  };

  return (
    <>
      <div className="singleRoutine">
        <h3>{routine.name}</h3>
        <p>{routine.creatorName}</p>
        <p>{routine.goal}</p>
      </div>
      <div>
        <button onClick={handleChange}>see activities for this routine</button>
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
      </div>
    </>
  );
};

export default SingleRoutine;
