import React from "react";

const SingleActivity = (props) => {
  const activity = props.activity;
  // console.log(activity);
  const activityRoutines = props.activityRoutines;
  // console.log(activityRoutines);

  return (
    <>
      <div className="singleActivity">
        <h3>{activity.name}</h3>
        <p>{activity.description}</p>
      </div>
    </>
  );
};

export default SingleActivity;
