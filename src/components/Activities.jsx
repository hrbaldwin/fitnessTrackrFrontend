import React from "react";
import { SingleActivity } from "./";

const Activities = (props) => {
  const activities = props.activities;
  // console.log(activities, "activities");
  // const activityRoutines = props.activityRoutines;
  // console.log(activityRoutines);
  return (
    <>
      <h2 className="activityHeader">Activities:</h2>
      {activities.length ? (
        activities.map((activity) => {
          return (
            <SingleActivity
              key={`activity-id-${activity.id}`}
              activity={activity}
            />
          );
        })
      ) : (
        <div>loading Activities...</div>
      )}
    </>
  );
};
export default Activities;
