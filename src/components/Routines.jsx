import React from "react";
import { SingleRoutine } from "./";

const Routines = (props) => {
  const routines = props.routines;
  console.log(routines, "routines");
  return (
    <>
      <h2>Routines</h2>
      {routines.length ? (
        routines.map((routine) => {
          return <SingleRoutine routine={routine} />;
        })
      ) : (
        <div>loading routines...</div>
      )}
    </>
  );
};
export default Routines;
