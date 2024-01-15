import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import Task from "./Task";
import CompletedTask from "./CompletedTask";
import AddButton from "./AddButton";

const TaskDisplay = () => {
    const { data: tasks2, error} = useFetch("http://localhost:8000/tasks");
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

    function deleteData(id) {
        clearTaskStatus();
        fetch(`http://localhost:8000/tasks/${id}`, {
                    method: "DELETE"        
        }).then(
            setTaskId(id)
        )
    }
    
    function idAndStatusSetter(id, status) {
        setTaskId(id);
        setTaskStatus(status);
    }

    function clearTaskStatus() {
        setTaskId(null);
        setTaskStatus(null);
    }


    return ( 
        <div className="w-4/5 h-auto ml-[50%] mt-10 p-6 -translate-x-1/2 rounded-lg drop-shadow-lg bg-white dark:bg-dark-holder text-neutral-800 dark:text-white transition-colors duration-200">
            <div>
                <h3 className="text-xl font-bold">Tasks</h3>
                <Task tasks={tasks} updateData={updateData} deleteData={deleteData} taskStatus={taskStatus} taskId={taskId} setTaskId={setTaskId}/>
                <AddButton tasks={tasks} idAndStatusSetter={idAndStatusSetter}/>
            </div>
            <div>
                <h3 className="mt-8 text-xl font-bold">Completed Tasks</h3>
                <CompletedTask tasks={tasks} updateData={updateData} deleteData={deleteData} taskStatus={taskStatus} taskId={taskId}/>
            </div>
        </div>
    );
}
 
export default TaskDisplay;