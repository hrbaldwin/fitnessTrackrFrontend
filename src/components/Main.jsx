import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Navbar,
  Routines,
  Activities,
  LogIn,
  Register,
  CreateActivity,
  CreateRoutine,
} from "./";
import {
  fetchingActivities,
  fetchingRoutines,
  fetchingRoutinesForActivities,
} from "../api";

const Main = () => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [activityRoutines, setActivityRoutines] = useState([]);

  // useEffect(() => {
  //   const fetchRoutinesForActivities = async () => {
  //     const returnedActivityRoutines = await fetchingRoutinesForActivities(
  //       activityId
  //     );
  //     setActivityRoutines(returnedActivityRoutines);
  //   };
  //   fetchRoutinesForActivities();
  // }, []);

  useEffect(() => {
    const fetchRoutines = async () => {
      const returnedRoutines = await fetchingRoutines();
      setRoutines(returnedRoutines);
    };
    fetchRoutines();
  }, []);

  useEffect(() => {
    const fetchActivities = async () => {
      const returnedActivities = await fetchingActivities();
      setActivities(returnedActivities);
    };
    fetchActivities();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="routines" element={<Routines routines={routines} />} />
        <Route
          path="activities"
          element={
            <Activities
              activities={activities}
              activityRoutines={activityRoutines}
            />
          }
        />
        <Route path="users/login" element={<LogIn />} />
        <Route path="users/register" element={<Register />} />
        <Route path="createactivity" element={<CreateActivity />} />
        <Route path="createroutine" element={<CreateRoutine />} />
      </Route>
    )
  );

  return (
    <div id="main">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Main;
