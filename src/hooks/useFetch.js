import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {authHeader} from "../_helpers/auth-header";

const useFetch = (url) => {
    const history = useHistory();

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                ...authHeader(),
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            if (!response.ok) {
                if (response.status === 403) {
                    throw Error("Forbidden");
                }
                throw Error("Server Error");
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
            if (err.message === "Forbidden") {
                history.push("/login");
            }
        })
    }, [history, url]);

    return {data, isPending, error};
}

export default useFetch;