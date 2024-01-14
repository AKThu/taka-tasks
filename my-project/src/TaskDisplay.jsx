import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import Task from "./Task";
import CompletedTask from "./CompletedTask";

const TaskDisplay = () => {
    let { data: tasks2, error} = useFetch("http://localhost:8000/tasks");
    const [ tasks, setTasks] = useState(tasks2);
    const [ taskStatus, setTaskStatus ] = useState();
    const [ taskId, setTaskId] = useState();

    useEffect(() => {
        fetch('http://localhost:8000/tasks')
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            })
    }, [taskStatus, taskId])

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
    
    function idAndStatusSetter(id, status) {
        setTaskStatus(status);
        setTaskId(id);
    }


    return ( 
        <div className="w-[800px] h-[800px] ml-[50%] mt-10 p-6 -translate-x-1/2 rounded-lg drop-shadow-lg bg-white">
            <h3 className="text-xl font-bold">Tasks</h3>
            <Task tasks={tasks} updateData={updateData} taskStatus={taskStatus} taskId={taskId}/>
            <h3 className="mt-8 text-xl font-bold">Completed Tasks</h3>
            <CompletedTask tasks={tasks} updateData={updateData} taskStatus={taskStatus} taskId={taskId}/>
        </div>
    );
}
 
export default TaskDisplay;