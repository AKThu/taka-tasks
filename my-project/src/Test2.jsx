import { useState, useEffect } from "react";

const Test2 = () => {
    const [ check, setCheck ] = useState("")
    const [ text, setText] = useState("")

    const doUpdate = (event) => {
        setCheck(event ? "done" : "not done");
        console.log(event)
    }

    useEffect(() => {
        fetch("http://localhost:8001/task", {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    "status": check,
                    "name": text,
                    "id": 1
                })
            })
            console.log(check)

    }, [doUpdate])
    

    useEffect(() => {
        fetch("http://localhost:8001/task")
            .then(response => response.json())
            .then(data => {
                setCheck(data.status)
                setText(data.name)
                console.log(data)

        })
    }, []);
    
    return ( 
        <>
            <input
                type="checkbox"
                checked = { check === "done" ? true : false }
                onChange = {(e) => doUpdate(e.target.checked)}
            />
            <label>{text}</label>
        </>
    );
}
 
export default Test2;