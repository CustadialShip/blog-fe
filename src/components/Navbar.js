import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navbar">
            <h1>FreeSpace</h1>
            <div className="links">
                <Link to="/">Main</Link>
                <Link to="/create">Create</Link>
            </div>
        </div>
    );
};

export default Navbar;