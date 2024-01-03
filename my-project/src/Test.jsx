import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const Test = () => {
    
    const dataToUpdate = null;

    const handleUpdate = (id, name, status) => {
        dataToUpdate =  {
                            "status": status,
                            "name": name,
                            "id": id
                        }
    }

    useEffect(() => {
        
        fetch("http://localhost:8000/tasks/" + id, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify()
            .then(() => {
    
            })
        })

    }, [handleUpdate])


    

    useEffect(() => {
        const { data: tasks , error } = useFetch("http://localhost:8000/tasks");
    })


    return ( 
        <>
            { tasks && tasks.map((task) => 
                
                <div className="flex items-center" key={task.id}>
                    <input
                        type="checkbox"
                        checked={(task.status === "not done") ? false : true}
                        onChange={(e) => {
                            let status = e.target.checked === true ? "done" : "not done"
                            handleUpdate(task.id, task.name, status);
                        }}
                    />
                    <p className="ml-2 inline-block text-stone-700">{task.name}</p>
                </div>
            )}
            <button onClick={null}>click me</button>
        </>
     );
}
 
export default Test;