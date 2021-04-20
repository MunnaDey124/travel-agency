import React from 'react';
import ReactPlayer from "react-player";
import './NewSection.css';

const NewSection = () => {
    return (
        <div className="container ">
            <div className="col-md-12">
            <h6 className="text-center">Try Now</h6>
            <h1 className="text-center">Winter Sports</h1>
            <div className="section_VideoPart col-md-12">
                <ReactPlayer className="style "
                    url="https://www.youtube.com/watch?v=C-y70ZOSzE0"
                />
            </div>
            <div className="text-center">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis sit amet, consectetuer adipiscing elit Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit ame</p>
            <button className="button btn btn-primary ">View More</button>
            </div>
            </div>

        </div>
    );
};

export default NewSection;