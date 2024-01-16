import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Task = ({tasks}) => {
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
                if(!task.status) {
                    return (
                        <li
                            key={task.id}
                            id={task.id}
                            className={`flex items-center px-4 py-0 hover:bg-light-rose hover:shadow-md hover:text-white justify-between`}
                            onMouseEnter={() => setIsMouseEntered({"mouseEntered": true, "id": task.id})}
                            onMouseLeave={() => setIsMouseEntered({"mouseEntered": false, "id": task.id})}
                        >
                            <div>
                                <input
                                    id={task.id}
                                    type="checkbox"
                                    checked={false}
                                    onChange={(e) => {}}
                                />
                                <p className="ml-2 inline-block">{task.name}</p>
                            </div>
                            <div className={`${checkIsMouseEntered(isMouseEntered, task.id)}`}>
                                <button
                                    id={task.id}
                                    onClick={() => {}}
                                >
                                    <FontAwesomeIcon icon={faTrash} style={{color: "#FFF5E0"}} />
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
 
export default Task;