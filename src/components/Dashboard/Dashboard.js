import React from 'react';
import SideBarDash from './SideBarDash/SideBarDash';




const containerStyle = {
    backgroundColor: "#F4FDFB",
}

const Dashboard = () => {
    return (
        <section style={containerStyle} className="container-fluid row">
                <div className="col-md-2 ">
                    <SideBarDash></SideBarDash>
                 </div>       
        </section>
    );
};

export default Dashboard;