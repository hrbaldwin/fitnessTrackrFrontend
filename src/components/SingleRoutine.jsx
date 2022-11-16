import React, { useState } from "react";
import { DeleteRoutine, EditRoutine } from "../api";


const SingleRoutine = (props) => {
  const routine = props.routine;
  let [updateRoutine, setUpdateRoutine]= useState({
    name:"",
    goal:"",
    isPublic:null,
  })
  let [toggleActivities, setToggleActivities] = useState(true);

  //   console.log(routine);
  //   console.log(routine.count);
  async function handleDelete(e) {
    e.preventDefault();
    console.log(e, "D");
    const toDelete = e.target.id;

    const token = localStorage.getItem("token");
    console.log(e)
    const deleted = await DeleteRoutine(toDelete, token);
  }
  const handleChange = () => {
    return setToggleActivities(!toggleActivities);
  };
  async function handleChange2(e)  {
    e.preventDefault()
    const toEdit = e.target.id
    const token = localStorage.getItem("token");
    const edited = await EditRoutine(toEdit, token)
    return edited
  }

  return (
    <>
      <h3>{routine.name}</h3>
      <p>{routine.creatorName}</p>
      <p>{routine.goal}</p>
      <div>
        <button onClick={handleChange}>see activities for this routine</button>
        {routine && routine.activities.length
          ? routine.activities.map((activity, i) => {
              return (
                <div className="routineActivities" key={`activity-routine${i}`}>
                  <p key={`activity-name${i}`}>{activity.name}</p>
                  <p key={`activity-description${i}`}>{activity.description}</p>
                  <p key={`activity-duration${i}`}>{activity.duration}</p>
                  <p key={`activity-count${i}`}>{activity.count}</p>
                </div>
              );
            })
          : null}
      </div>
      <div>
        <button onClick={handleDelete} id={routine.id ? `${routine.id}`:null} >Delete Routine</button>
        <button onClick={handleChange2} id={routine.id ? `${routine.id}`:null}>Edit Routine</button>
      </div>
    </>
  );
};

export default SingleRoutine;
