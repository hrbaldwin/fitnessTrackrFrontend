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
      {/* <p>{routine.count}</p>
      <p>{routine.duration}</p> */}
    </>
  );
};

export default SingleRoutine;
