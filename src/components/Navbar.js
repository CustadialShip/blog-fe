import {Link} from 'react-router-dom';
import Cookies from "universal-cookie";
import {useHistory} from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import {useState} from "react";

const Navbar = () => {
    const cookies = new Cookies();
    const history = useHistory();

    const [isNavbarActive, setIsNavbarActive] = useState(false);

    const handleClick = () => {
        setIsNavbarActive(!isNavbarActive)
        cookies.remove('jwt_authorization');
        history.push('/login');
    }

    return(
        <div className="navbar">
            <h1>FreeSpace</h1>
            <div className="links">
                <span className={!isNavbarActive ? ["navbar-menu", "navbar-menu-active"].join(' ') : "navbar-menu"}>
                    <Link onClick={() => setIsNavbarActive(!isNavbarActive)} to="/home">Main</Link>
                    <Link onClick={() => setIsNavbarActive(!isNavbarActive)} to="/create">Create</Link>
                    <Link onClick={() => setIsNavbarActive(!isNavbarActive)} to="/profile">My Profile</Link>
                    <a onClick={handleClick}>Log out</a>
                </span>
                <span onClick={() => setIsNavbarActive(!isNavbarActive)} className="mobile-btn">
                    {isNavbarActive ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </span>
            </div>
        </div>
    );
};

export default Navbar;