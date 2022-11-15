import React from "react";

const SingleRoutine = (props) => {
  const routine = props.routine;
  console.log(routine);

  return (
    <>
      <h3>{routine.name}</h3> <p>{routine.creatorName}</p>
      <p>{routine.goal}</p>
    </>
  );
};

export default SingleRoutine;
