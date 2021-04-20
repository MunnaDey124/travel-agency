import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}
const Admin = () => {
    return (
        <section style={containerStyle} className="container-fluid row">
                <div className="col-md-2 ">
                        <Sidebar></Sidebar>
                </div>
        </section>
    );
};

export default Admin;