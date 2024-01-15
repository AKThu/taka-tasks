import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CompletedTask = ({tasks, updateData, deleteData, taskStatus, taskId}) => {
    const [ isMouseEntered, setIsMouseEntered ] = useState({"mouseEntered": false, "id": null});

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
    function statusUpdateHandler(id, taskStatus, stateStatus) {
        return statusTypeHandler((id === taskId ? stateStatus : taskStatus), "string");
    }

    function checkIsMouseEntered(isMouseEntered, taskId) {
        if(isMouseEntered.mouseEntered && (isMouseEntered.id === taskId)) {
            return "block"
        } else {
            return "hidden"
        }
    }
    

    return (
        <ul>
            { tasks && tasks.map((task) => {
                if(task.status === "done") {
                    return (
                        <li
                            key={task.id}
                            id={task.id}
                            className="flex items-center px-4 hover:bg-light-rose hover:shadow-md hover:text-white-rose justify-between"
                            onMouseEnter={() => setIsMouseEntered({"mouseEntered": true, "id": task.id})}
                            onMouseLeave={() => setIsMouseEntered({"mouseEntered": false, "id": task.id})}
                        >
                            <div>
                                <input
                                    id={task.id}
                                    type="checkbox"
                                    checked={statusUpdateHandler(task.id, task.status, taskStatus)}
                                    onChange={(e) => updateData(task.id, statusTypeHandler(e.target.checked, "bool"), task.name)}
                                />
                                <p className="ml-2 inline-block line-through">{task.name}</p>
                            </div>
                            <div className={`${checkIsMouseEntered(isMouseEntered, task.id)}`}>
                                <button id={task.id} onClick={() => deleteData(task.id)}>
                                    <FontAwesomeIcon icon={faTrash} style={{color: "#FFF"}} />
                                </button>
                            </div>
                        </li>
                    )
                }
            }
            )}
        </ul>
    );
}
 
export default CompletedTask;