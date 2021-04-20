import React from 'react';
import { Link } from 'react-router-dom';

const SideBarDash = () => {
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
                        <Link to="/book"  className='text-white'>
                            <span>Book</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookList"  className='text-white'>
                            <span>Book List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addReview" className='text-white'>
                            <span>Add Review</span>
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

export default SideBarDash;