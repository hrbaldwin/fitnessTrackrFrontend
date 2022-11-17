import React from "react";
import { SingleRoutine } from "./";

const Routines = (props) => {
  const routines = props.routines;
  const activities=props.activities
  // console.log(routines, "routines");
  return (
    <>
      <div className="routinesColumn">
        <h2 className="routineHeader">Routines:</h2>
        {routines.length ? (
          routines.map((routine) => {
            return (
              <SingleRoutine
                routine={routine}
                activities={activities}
                key={`routine-id-${routine.id}`}
              />
            );
          })
        ) : (
          <div>loading routines...</div>
        )}
      </div>
    </>
  );
};
export default Routines;
