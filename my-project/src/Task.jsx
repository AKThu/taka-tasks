import { useState, useEffect, useRef } from 'react';
import useFetch from './useFetch';

const Task = () => {
    const { data: tasks, error} = useFetch("http://localhost:8000/tasks");
    const [ taskStatus, setTaskStatus ] = useState();
    const [ taskId, setTaskId] = useState();


    // function to update the data in the json server
    // invoke when the status or name of the task change
    function updateData(id, status, name) {
        fetch(`http://localhost:8000/tasks/${id}`, {
                    method: 'PUT',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        "status": status,
                        "name": name,
                        "id": id
                    })
                })
                .then(
                    idAndStatusSetter(id, status)
                )
    }


    // function to swap data type for status
    // bool for input checked
    // string to store the data in json server
    function statusTypeHandler(status, type) {
        if(type === "bool") {
            return status ? "done" : "not done";
        } else if(type === "string") {
            return status === "done" ? true : false;
        } else {
            console.error("statusHandler type not found!");
        }
    }


    // function to update the status of Checked attribute in input element
    // 
    function statusUpdateHandler(id, taskStatus, stateStatus) {
        return statusTypeHandler((id === taskId ? stateStatus : taskStatus), "string");
    }


    function idAndStatusSetter(id, status) {
        setTaskStatus(status);
        setTaskId(id);
    }
    

    return (
        <>
            { tasks && tasks.map((task) => 
                <div className="flex items-center" key={task.id} id={task.id}>
                    <input
                        type="checkbox"
                        checked={statusUpdateHandler(task.id, task.status, taskStatus)}
                        onChange={(e) => updateData(task.id, statusTypeHandler(e.target.checked, "bool"), task.name)}
                    />
                    <p className="ml-2 inline-block text-stone-700">{task.name}</p>
                </div>
            )}
        </>
    );
}
 
export default Task;