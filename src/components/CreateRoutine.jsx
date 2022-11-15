import React, {useState} from "react";
import { creatingRoutine } from "../api";

const CreateRoutine = () => {

    const [newRoutine, setNewRoutine] = useState({
        name: "",
        description: "",
      });
    
      const handleChange = (event) => {
        setNewRoutine({
          ...newRoutine,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        const { name, goal } = newRoutine;
    
        const token = localStorage.getItem("token");
        const ourNewRoutine = await creatingRoutine(token, name, goal);
        console.log(ourNewRoutine);
        setNewRoutine({ name: "", goal: "" });
      };

    return(
        <>
        <h2>create new routine</h2>
      <form onSubmit={handleSubmit}>
        <label>name:</label>
        <input type="text" name="name" onChange={handleChange} required />
        <label>goal:</label>
        <input
          type="text"
          name="goal"
          onChange={handleChange}
          required
        />
        <button type="submit">submit</button>
      </form>
        </>
    )
}
export default CreateRoutine