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
  MyRoutines,
} from "./";
import {
  fetchingActivities,
  fetchingRoutines,
  fetchingRoutinesForActivities,
  fetchingMyRoutines,
} from "../api";

const Main = () => {
  const [routines, setRoutines] = useState([]);
  const [myRoutines, setMyRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [activityRoutines, setActivityRoutines] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null)
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
    const checkToken = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    checkToken();
  }, []);

  useEffect(() => {
    const fetchRoutines = async () => {
      const returnedRoutines = await fetchingRoutines();
      setRoutines(returnedRoutines);
    };
    fetchRoutines();
  }, []);
  useEffect(() => {
    const fetchMyRoutines = async () => {
      const token = localStorage.getItem("token");
      const username = localStorage.getItem("username");
      const myReturnedRoutines = await fetchingMyRoutines(username, token);
      setMyRoutines(myReturnedRoutines);
    };
    fetchMyRoutines();
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
      <Route path="/" element={<Navbar isLoggedIn={isLoggedIn} />}>
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
        <Route path="users/login" element={<LogIn error={error} setError={setError} />} />
        <Route path="users/register" element={<Register />} />
        <Route path="createactivity" element={<CreateActivity />} />
        <Route path="createroutine" element={<CreateRoutine />} />
        <Route
          path="myroutines"
          element={<MyRoutines routines={routines} myRoutines={myRoutines} />}
        />
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
