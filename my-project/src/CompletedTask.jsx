const CompletedTask = ({tasks, updateData, taskStatus, taskId}) => {

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
    

    return (
        <>
            { tasks && tasks.map((task) => {
                if(task.status === "done") {
                    return (
                        <div className="flex items-center line-through" key={task.id} id={task.id} >
                            <input
                                type="checkbox"
                                checked={statusUpdateHandler(task.id, task.status, taskStatus)}
                                onChange={(e) => updateData(task.id, statusTypeHandler(e.target.checked, "bool"), task.name)}
                            />
                            <p className="ml-2 inline-block text-stone-700">{task.name}</p>
                        </div>
                    )
                }
            }
            )}
        </>
    );
}
 
export default CompletedTask;