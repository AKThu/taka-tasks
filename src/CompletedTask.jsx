import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CompletedTask = ({tasks, crudHandlers}) => {
    const [ isMouseEntered, setIsMouseEntered ] = useState({"mouseEntered": false, "id": null});


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
                if(task.status) {
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
                                    checked={task.status}
                                    onChange={() => crudHandlers.updateStatusHandler(task)}
                                />
                                <p className="ml-2 inline-block line-through">{task.name}</p>
                            </div>
                            <div className={`${checkIsMouseEntered(isMouseEntered, task.id)}`}>
                                <button
                                    id={task.id}
                                    onClick={() => crudHandlers.deleteDataHandler(task)}
                                >
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