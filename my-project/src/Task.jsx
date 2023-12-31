import { useState, useEffect } from 'react';
import useFetch from './useFetch';

const Task = () => {
    const { data: tasks, error} = useFetch("http://localhost:8000/tasks");

    const input = (e) => {
        console.log(e);
    }
    

    return (
        <>
            { tasks && tasks.map((task) => 
                <div className="flex items-center" key={task.id}>
                    <input type="checkbox" checked={(task.status === "not done") ? false : true}/>
                    <p className="ml-2 inline-block text-stone-700">{task.name}</p>
                </div>
            )}
            <button onClick={input}>click me</button>
        </>
    );
}
 
export default Task;