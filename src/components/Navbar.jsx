import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const handleChange = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  return (
    <>
      <div id="navbar">
        <h2>fitnessTrackr</h2> <span className="target">🎯</span>
      </div>
      <div>
        {isLoggedIn ? (
          <div className="loggedInNav">
            <Link to={"/activities"}>
              {" "}
              <button className="inButtons"> activities</button>{" "}
            </Link>
            <Link to={"/routines"}>
              {" "}
              <button className="inButtons"> routines</button>{" "}
            </Link>
            <Link to={`/myroutines/${localStorage.getItem("username")}`}>
              {" "}
              <button className="inButtons">my routines</button>{" "}
            </Link>
            <Link to={"/createroutine"}>
              {" "}
              <button className="inButtons">create routine</button>{" "}
            </Link>
            <Link to={"/createactivity"}>
              {" "}
              <button className="inButtons">create activity</button>{" "}
            </Link>
            <button className="inButtons" onClick={handleChange}>
              log out
            </button>
          </div>
        ) : (
          <div className="loggedOutNav">
            <Link to={"/activities"}>
              {" "}
              <button className="outButtons"> activities</button>{" "}
            </Link>
            <Link to={"/routines"}>
              {" "}
              <button className="outButtons"> routines</button>{" "}
            </Link>
            <Link to={"/users/login"}>
              {" "}
              <button className="outButtons">log in</button>{" "}
            </Link>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
