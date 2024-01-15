import { useState, useRef } from "react";

const AddButton = ({tasks, idAndStatusSetter}) => {
    const [ inputDisplay, setInputDisplay ] = useState(false);
    const newTask = useRef();
    

    
    function postData(name) {
        // e.preventDefault();
        
        fetch("http://localhost:8000/tasks", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "status": "not done",
                "name": name,
                "id": getLastElementId(tasks) + 1
            })
        }).then(
            idAndStatusSetter(getLastElementId(tasks) + 1, "not done")
            )
    }
        
    function getLastElementId(tasks) {
        return tasks[tasks.length - 1].id;
    }

    function showInputBox() {
        setInputDisplay(current => !current);
    }

    function inputCleaner() {
        newTask.current.value = "";
    }

    function confirmButtonHandler(name) {
        postData(name);
        inputCleaner();
        showInputBox();
    }


    return (
        <div className="mt-2">
            <div className={`${inputDisplay ? "flex" : "hidden"} flex-row space-x-3 mb-2`}>
                <input ref={newTask} type="text" className="border-[0.5px] border-slate-500 w-40 h-8 px-2 rounded-lg"></input>
                <button onClick={() => confirmButtonHandler(newTask.current.value)} className="bg-my-pink px-4 py-1 rounded-full text-white text-center border-[0.5px] hover:shadow-md hover:bg-white hover:text-my-pink hover:border-my-pink">add</button>
            </div>
            
            <button onClick={showInputBox} className="bg-my-pink px-4 py-1 rounded-full text-white text-center border-[0.5px] hover:shadow-md hover:bg-white hover:text-my-pink hover:border-my-pink">
                {inputDisplay ? "Close" : "Add task"}
            </button>
        </div>
    );
}

export default AddButton;