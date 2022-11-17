import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingleRoutine = (props) => {
  const routine = props.routine;
  let [toggleActivities, setToggleActivities] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
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
        <Link to={`/addactivities/${routine.id}`}>
          <button id={routine.id ? `${routine.id}` : null}>
            add activity to routine
          </button>
        </Link>
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
      </div>
    </>
  );
};

export default SingleRoutine;
