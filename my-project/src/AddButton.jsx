import { useState } from "react";

const AddButton = () => {
    const [ inputDisplay, setInputDisplay ] = useState(false);

    function showInputBox() {
        setInputDisplay(current => !current);
    }

    return (
        <div className="mt-2">
            <div className={`${inputDisplay ? "hidden" : "flex"} flex-row space-x-3 mb-2`}>
                <input type="text" className="border-2 border-slate-400 w-40 h-8 px-2"></input>
                <button onClick={showInputBox} className="bg-green-500 w-8 rounded-full">+</button>
                <button onClick={showInputBox} className="bg-red-500 w-8 rounded-full">-</button>
            </div>
            <button onClick={showInputBox} className="bg-my-pink px-4 py-1 rounded-full text-my-light-beige text-center">Add task</button>
        </div>
    );
}
 
export default AddButton;