const DeleteButton = ({ taskId, setTaskId }) => {

    function deleteData(id) {
        fetch(`http://localhost:8000/tasks/${id}`, {
                    method: "DELETE"        
        }).then(() => {
            setTaskId(id);
        })
    }

    return ( 
        <button id={taskId} onClick={(e) => deleteData(taskId)}>Delete</button>
    );
}
 
export default DeleteButton;