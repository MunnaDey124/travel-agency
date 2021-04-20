import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser] = useContext(UserContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <h3>TravelAgency</h3>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                    <Link to="/home" className="nav-link ms-5" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <Link to="/dashboard" className="nav-link ms-5" >Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link ms-5" >Admin</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5  " href="#">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        { loggedInUser.name?
                            <Link to="/login" className="nav-link ms-5 ">LogOut</Link>
                        :
                        <Link to="/login" className="nav-link ms-5 ">Login</Link>
                        }
                    </li>
                    <li className="nav-item">
                    <Link to="/login" className="nav-link ms-5 ">{loggedInUser.name}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;