import { useState, useRef } from "react";

const AddButton = ({ addDataHandler }) => {
    const [ inputDisplay, setInputDisplay ] = useState(false);
    const newTask = useRef();
    
    
    function showHideInputBox() {
        setInputDisplay(current => !current);
    }

    function inputCleaner() {
        newTask.current.value = '';
    }

    function confirmButtonHandler(name) {
        addDataHandler(name);
        inputCleaner();
    }


    return (
        <div className="mt-2">
            <div className={`${inputDisplay ? "flex" : "hidden"} flex-row space-x-3 mb-2`}>
                <input
                    ref={newTask}
                    type="text"
                    className="border-[0.5px] border-slate-500 w-40 h-8 px-2 rounded-lg dark:text-dark-body"
                    placeholder="New task"
                >
                </input>
                <button
                    onClick={() => confirmButtonHandler(newTask.current.value)}
                    className="bg-light-rose px-4 py-1 rounded-full text-white-rose text-center border-[0.5px] hover:shadow-md hover:bg-white-rose hover:text-light-rose hover:border-light-rose"
                >
                    add
                </button>
            </div>
            
            <button
                onClick={showHideInputBox}
                className="bg-light-rose px-4 py-1 rounded-full text-white-rose text-center border-[0.5px] hover:shadow-md hover:bg-white-rose hover:text-light-rose hover:border-light-rose"
            >
                {inputDisplay ? "Close" : "Add task"}
            </button>
        </div>
    );
}

export default AddButton;