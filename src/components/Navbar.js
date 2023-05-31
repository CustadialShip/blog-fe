import {Link} from 'react-router-dom';
import Cookies from "universal-cookie";
import {useHistory} from "react-router-dom";

const Navbar = () => {
    const cookies = new Cookies();
    const history = useHistory();

    const handleClick = () => {
        cookies.remove('jwt_authorization');
        history.push('/login');
    }

    return(
        <div className="navbar">
            <h1>FreeSpace</h1>
            <div className="links">
                <Link to="/home">Main</Link>
                <Link to="/create">Create</Link>
                <Link to="/profile">My Profile</Link>
                <a onClick={handleClick}>Log out</a>
            </div>
        </div>
    );
};

export default Navbar;