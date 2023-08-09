import {Link} from 'react-router-dom';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import {useState} from "react";
import {logout} from "../_services/login.service";

const Navbar = () => {
    const [isNavbarActive, setIsNavbarActive] = useState(false);

    const handleClick = () => {
        setIsNavbarActive(!isNavbarActive)
        logout();
    }

    return(
        <div className="navbar">
            <Link to="/home">
                <h1>FreeSpace</h1>
            </Link>
            <div className="links">
                <span className={!isNavbarActive ? ["navbar-menu", "navbar-menu-active"].join(' ') : "navbar-menu"}>
                    <Link onClick={() => setIsNavbarActive(!isNavbarActive)} to="/home">Main</Link>
                    <Link onClick={() => setIsNavbarActive(!isNavbarActive)} to="/create">Create</Link>
                    <Link onClick={() => setIsNavbarActive(!isNavbarActive)} to="/profile">My Profile</Link>
                    <Link onClick={handleClick} to="/login">Log out</Link>
                </span>
                <span onClick={() => setIsNavbarActive(!isNavbarActive)} className="mobile-btn">
                    {isNavbarActive ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </span>
            </div>
        </div>
    );
};

export default Navbar;