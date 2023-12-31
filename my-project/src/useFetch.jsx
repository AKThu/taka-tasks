import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err.message);
        })
        
    }, []);

    return { data, error }
}
 
export default useFetch;