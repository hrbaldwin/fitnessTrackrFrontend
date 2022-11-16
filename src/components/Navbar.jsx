import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
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
        <Link to={"/users/login"}>
          {" "}
          <button>log in</button>{" "}
        </Link>
        <Link to={"/users/register"}>
          {" "}
          <button>sign up</button>{" "}
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
