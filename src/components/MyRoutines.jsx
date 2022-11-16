import React, {useState} from "react";
import { useParams } from "react-router-dom";


const MyRoutines= (props) => {
const routines = props.routines
const {creatorId} = useParams()
const [userRoutines, setUserRoutines] = useState(
    routines.filter((routine)=>{
        console.log(routine)
        return routine.creatorId == creatorId
    })
)

    return(<>
        {userRoutines.map((routine, i)=>{
            return(<>
            <div className="singleRoutine" key={`filtered${i}`}>
        <h3>{routine.name}</h3>
        <p>{routine.creatorName}</p>
        <p>{routine.goal}</p>
      </div>
            </>)
        })}
        </>)
}

export default MyRoutines