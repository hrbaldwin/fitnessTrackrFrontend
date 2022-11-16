import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  return (
    <>
      <div id="navbar">
        <h2>fitnessTrackr</h2>
      </div>
      <div>
        <Link to={"/activities"}>
          {" "}
          <button> activities</button>{" "}
        </Link>
        <Link to={"/routines"}>
          {" "}
          <button> routines</button>{" "}
        </Link>
        {isLoggedIn ? (
          <>
            <Link to={"/"}>
              {" "}
              <button>my routines</button>{" "}
            </Link>
            <Link to={"/createroutine"}>
              {" "}
              <button>create routine</button>{" "}
            </Link>
            <Link to={"/createactivity"}>
              {" "}
              <button>create activity</button>{" "}
            </Link>
          </>
        ) : null}
        {isLoggedIn ? (
          <Link to={"/users/login"}>
            {" "}
            <button>log out</button>{" "}
          </Link>
        ) : (
          <Link to={"/users/login"}>
            {" "}
            <button>log in</button>{" "}
          </Link>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
