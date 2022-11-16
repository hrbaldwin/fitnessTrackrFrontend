import React from "react";

const SingleRoutine = (props) => {
  const routine = props.routine;

  console.log(routine);
  //   console.log(routine.count);

  return (
    <>
      <h3>{routine.name}</h3>
      <p>{routine.creatorName}</p>
      <p>{routine.goal}</p>
      {routine && routine.activities.length ?
      routine.activities.map((activity, i )=>{
        return <><p className="routine" key={`activity-singleRoutine${i}`}>{activity.name}</p>
        <p>{activity.description}</p>
        <p>{activity.duration}</p>
        <p>{activity.count}</p>
        </>
      }) :null
    }

    </>
  );
};

export default SingleRoutine;
