import React from "react";

const MyRoutines = (props) => {
  const myRoutines = props.myRoutines;

  return (
    <>
      <h2 className="routineHeader">My Routines:</h2>
      <div className="routinesColumn">
        {myRoutines && myRoutines.length
          ? myRoutines.map((routine, i) => {
              return (
                <div className="singleRoutine" key={`filtered${i}`}>
                  <h3>{routine.name}</h3>
                  <p>{routine.creatorName}</p>
                  <p>{routine.goal}</p>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default MyRoutines;
