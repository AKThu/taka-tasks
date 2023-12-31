import { useState } from "react";
import useFetch from "./useFetch";

const Test = () => {
    const { data: tasks , error } = useFetch("http://localhost:8000/tasks");

    const input = (e) => {
        console.log(e);
    }

    const dataToUpdate = {
        "status": "done",
        "name": "Drink water",
        "id": 1
    };

    const handleUpdate = () => {
        fetch("http://localhost:8000/tasks/1", {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(dataToUpdate)
        })
            .then(() => {
                
            })
    }

    return ( 
        <>
            { tasks && tasks.map((task) => 
                <div className="flex items-center" key={task.id}>
                    <input type="checkbox" checked={(task.status === "not done") ? false : true} />
                    <p className="ml-2 inline-block text-stone-700">{task.name}</p>
                </div>
            )}
            <button onClick={handleUpdate}>click me</button>
        </>
     );
}
 
export default Test;