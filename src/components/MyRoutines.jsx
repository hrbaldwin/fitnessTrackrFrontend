import React from "react";
import { DeleteRoutine } from "../api";
import { Link } from "react-router-dom";

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
                  {/* NOTHING RENDERS FOR IS PUBLIC */}
                  <p>is public:{routine.isPublic ? "yes" : "no"}</p>
                  <div className="myRoutineButtons">
                    <div className="editIconDiv">
                      <Link to={`/editmyroutine/${routine.id}`}>
                        <button
                          className="editIcon"
                          id={routine.id ? `${routine.id}` : null}
                        >
                          <img
                            id={`${routine.id}`}
                            className="edit"
                            src="../edit.png"
                          ></img>
                        </button>
                      </Link>
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
