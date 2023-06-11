import Cookies from "universal-cookie";
import {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import jwt from "jwt-decode";

const Signup = () => {
    const cookies = new Cookies();

    const [usernameIn, setUsername] = useState('');
    const [passwordIn, setPassword] = useState('');
    const [firstNameIn, setFirstNameIn] = useState('');
    const [secondNameIn, setSecondNameIn] = useState('');
    const [error, setError] = useState('');
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const login = (jwt_token) => {
        const decode = jwt(jwt_token);

        cookies.set("jwt_authorization", jwt_token, {
            expires: new Date(decode.exp * 1000)
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsPending(true);

        fetch('/api/v1/auth/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName: firstNameIn,
                secondName: secondNameIn,
                username: usernameIn,
                password: passwordIn
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw Error("Something went wrong. Please try again");
                }
                return response.json();
            })
            .then(data => {
                login(data.token);
                history.push("/home");
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            });
    };

    return (
        <div className="signup">
            <h2>Create a Freespace account</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>First name:</label>
                <input
                    type="text"
                    required
                    value={firstNameIn}
                    onChange={(e) => setFirstNameIn(e.target.value)}
                    placeholder='Enter first name'/>
                <label>Second name:</label>
                <input
                    type="text"
                    required
                    value={secondNameIn}
                    onChange={(e) => setSecondNameIn(e.target.value)}
                    placeholder='Enter second name'/>
                <label>Username:</label>
                <input
                    type="text"
                    required
                    value={usernameIn}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Enter username'/>
                <label>Password:</label>
                <input
                    type="text"
                    required
                    value={passwordIn}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter password'/>
                {error && <div className="error"><h4>{error}</h4></div>}
                {!isPending && <button>Sign Up</button>}
                {isPending && <button disabled>Sign Up...</button>}
            </form>
            <div className="signup-link">
                <h5>
                    Already have an account? <Link to="/login">Log In</Link>
                </h5>
            </div>
        </div>
    );
}

export default Signup;