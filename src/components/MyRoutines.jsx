import React, { useState } from "react";
import { DeleteRoutine, EditRoutine } from "../api";

const MyRoutines = (props) => {
  const myRoutines = props.myRoutines;

  async function handleDelete(e) {
    e.preventDefault();
    console.log(e, "D");
    const toDelete = e.target.id;

    const token = localStorage.getItem("token");
    console.log(e);
    const deleted = await DeleteRoutine(toDelete, token);
  }
  async function handleChange2(e) {
    e.preventDefault();
    const toEdit = e.target.id;
    const token = localStorage.getItem("token");
    const edited = await EditRoutine(toEdit, token);
    return edited;
  }
  let [updateRoutine, setUpdateRoutine] = useState({
    name: "",
    goal: "",
    isPublic: null,
  });

  return (
    <>
      <h2 className="routineHeader">My Routines:</h2>
      <div className="routinesColumn">
        {myRoutines && myRoutines.length
          ? myRoutines.map((routine, i) => {
              return (
                <div className="singleRoutine" key={`filtered${i}`}>
                  <h3>{routine.name}</h3>
                  <p>{routine.creatorName}</p>
                  <p>{routine.goal}</p>
                  <div className="myRoutineButtons">
                    <div className="editIconDiv">
                      <button
                        className="editIcon"
                        onClick={handleChange2}
                        id={routine.id ? `${routine.id}` : null}
                      >
                        <img
                          id={`${routine.id}`}
                          className="edit"
                          src="../edit.png"
                        ></img>
                      </button>
                    </div>
                    <div className="trashBinButtonDiv">
                      <button
                        className="trashBin"
                        onClick={handleDelete}
                        id={routine.id ? `${routine.id}` : null}
                      >
                        <img
                          id={`${routine.id}`}
                          className="trash"
                          src="../trash.png"
                        ></img>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default MyRoutines;
