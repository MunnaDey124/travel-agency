import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled ">
                <li>
                    <Link className='text-white' to="/dashboard">
                         <span>Dashboard</span>
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="/OrderList"  className='text-white'>
                            <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className='text-white'>
                            <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/MakeAdmins" className='text-white'>
                            <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageService"  className='text-white' >
                            <span>Manage Services</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/"  className='text-white'><span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;