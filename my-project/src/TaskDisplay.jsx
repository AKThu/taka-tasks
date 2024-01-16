import { useState, useEffect } from "react";
import Task from "./Task";
import CompletedTask from "./CompletedTask";
import AddButton from "./AddButton";

const TaskDisplay = ({tasks, crud}) => {

    function addDataHandler(name) {
        const taskToAdd = {
            name: name,
            status: false
        }
        crud.addData(taskToAdd);
    }

    function deleteDataHandler(task) {
        crud.deleteData(task.id)
    }

    function updateDataHandler(task) {

    }

    function updateStatusHandler(task) {
        const changedStatusTask = {
            id: task.id,
            name: task.name,
            status: !task.status,
        };
        crud.updateStatus(changedStatusTask);
    }



  const crudHandlers = { deleteDataHandler, updateDataHandler, updateStatusHandler };

    return (
        <div>
            {/* { error && <div className="text-light-rose dark:text-white text-3xl font-bold flex justify-center items-center mt-20">{error}</div> } */}
            {
              tasks && <div className="w-4/5 h-auto ml-[50%] mt-10 p-6 -translate-x-1/2 rounded-lg drop-shadow-xl bg-white dark:bg-dark-holder text-neutral-800 dark:text-white transition-colors duration-200">
                    <div>
                        <h3 className="text-xl font-bold">Tasks</h3>
                        <Task tasks={tasks} crudHandlers={crudHandlers} />
                        <AddButton addDataHandler={addDataHandler} />
                    </div>
                    <div>
                        <h3 className="mt-8 text-xl font-bold">Completed Tasks</h3>
                        <CompletedTask tasks={tasks} crudHandlers={crudHandlers} />
                    </div>
                </div>
            }
        </div>
    );
}
 
export default TaskDisplay;