import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Navbar, Routines, Activities } from "./";
import { fetchingActivities, fetchingRoutines } from "../api";

const Main = () => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([])

  useEffect(() => {
    const fetchRoutines = async () => {
      const returnedRoutines = await fetchingRoutines();
      setRoutines(returnedRoutines);
    };
    fetchRoutines();
  }, []);

  useEffect(() => {
    const fetchActivities = async () => {
      const returnedActivities = await fetchingActivities()
      setActivities(returnedActivities)
    };
    fetchActivities();
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="routines" element={<Routines routines={routines} />} />
        <Route path="activities" element={<Activities activities={activities} />} />
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
