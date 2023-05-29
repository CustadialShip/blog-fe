import {useEffect, useState} from "react";
import Cookies from "universal-cookie";

const useFetch = (url) => {

    const cookies = new Cookies();

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.get("jwt_authorization")
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw Error("Failed to fetch data");
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            })
    }, [url, cookies]);

    return {data, isPending, error};
}

export default useFetch;