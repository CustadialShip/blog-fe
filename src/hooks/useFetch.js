import {useEffect, useState} from "react";
import Cookies from "universal-cookie";
import {useHistory} from "react-router-dom";

const useFetch = (url) => {
    const DATA_SERVICE_URL = process.env.REACT_APP_DATA_AUTH_SERVICE;

    const cookies = new Cookies();
    const history = useHistory();

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(DATA_SERVICE_URL + url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.get("jwt_authorization")
            },
        })
        .then(response => {
            if (!response.ok) {
                if (response.status === 403) {
                    throw Error("Not authorized");
                }
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
            if (err.message === "Not authorized") {
                history.push("/login");
            } else {
                setError(err.message);
                setIsPending(false);
            }
        })
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;