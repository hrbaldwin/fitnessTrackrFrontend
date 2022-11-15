import React from "react";

const SingleActivity = (props) => {
  const activity = props.activity;
  console.log(activity);

  return (
    <>
      <h3>{activity.name}</h3>
      <p>{activity.description}</p>
      
    </>
  );
};

export default SingleActivity;