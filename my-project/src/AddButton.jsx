import { useState, useRef } from "react";

const AddButton = ({tasks, idAndStatusSetter}) => {
    const [ inputDisplay, setInputDisplay ] = useState(false);
    const newTask = useRef();
    

    function getLastElementId(tasks) {
        return tasks[tasks.length - 1].id;
    }
    
    function postData(e) {
        e.preventDefault();

        fetch("http://localhost:8000/tasks", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        "status": "not done",
                        "name": newTask.current.value,
                        "id": getLastElementId(tasks) + 1
                    })
        }).then(() => {
            idAndStatusSetter(getLastElementId(tasks) + 1, "not done");
        })
    }
    
    function showInputBox() {
        setInputDisplay(current => !current);
    }

    function inputCleaner() {
        newTask.current.value = "";
    }

    function confirmButtonHandler(e) {
        postData(e);
        inputCleaner();
        showInputBox();
    }

    function cancelButtonHandler() {
        inputCleaner();
        showInputBox();
    }

    return (
        <div className="mt-2">
            <div className={`${inputDisplay ? "flex" : "hidden"} flex-row space-x-3 mb-2`}>
                <input ref={newTask} type="text" className="border-2 border-slate-400 w-40 h-8 px-2 rounded-lg"></input>
                <button onClick={confirmButtonHandler} className="bg-green-500 w-8 rounded-full">+</button>
                <button onClick={cancelButtonHandler} className="bg-red-500 w-8 rounded-full">-</button>
            </div>
            
            <button onClick={showInputBox} className="bg-my-pink px-4 py-1 rounded-full text-my-light-beige text-center">
                {inputDisplay ? "Close" : "Add task"}
            </button>
        </div>
    );
}

export default AddButton;