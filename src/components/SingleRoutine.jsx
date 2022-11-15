import React, { useState, useEffect } from "react";
import {fetchingRoutines} from "../api"

const SingleRoutine = () => {
  const [routines, setRoutines] = useState([]);

    useEffect(() => {
      const fetchRoutines = async () => {
        const returnedRoutines = await fetchingRoutines();
        setRoutines(returnedRoutines);
      };
      fetchRoutines();
    },[])

  
  return (
    <>
      <h2>HI</h2>
    </>
  );
};

export default SingleRoutine;
