import React, {useState} from "react";
import { EditRoutine } from "../api";
import { useParams } from "react-router-dom";

const EditMyRoutine = () => {
      let [updateRoutine, setUpdateRoutine] = useState({
        name: "",
        goal: "",
        isPublic: null,
      });
const {routineId} = useParams()
      const handleChange = (event) => {
        setUpdateRoutine({
          ...updateRoutine,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        const { name, goal, isPublic } = updateRoutine;
    
        const token = localStorage.getItem("token");
        console.log(token)
        const ourEditedRoutine = await EditRoutine(routineId, name, goal,isPublic, token);
        console.log(ourEditedRoutine);
        setUpdateRoutine({ name: "", goal: "" });
      };

    return(<>
    <h2 className="newRoutineHeader">edit my routine</h2>
      <div className="newRoutineFormDiv">
        <form onSubmit={handleSubmit} className="newRoutineForm">
          <label>name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
          />{" "}
          <br></br>
          <label>goal:</label>
          <textarea
            type="text"
            name="goal"
            rows="5"
            cols="50"
            onChange={handleChange}
            required
          />
          <br></br>
          <button type="submit" className="newRoutineSubmitButton">
            submit
          </button>
        </form>
      </div>
    </>)
}

export default EditMyRoutine