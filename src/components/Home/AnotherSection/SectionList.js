import React from 'react';

const SectionList = ({place}) => {
    return (
        <div  className="col-md-3">
            <div>
                <img style={{height:'50px'}} src={place.img} alt="" srcset=""/>
            </div>
            <div>
                <h4>{place.name}</h4>
                <p>Aenean commodo ligula <br/> eget dolor. Lorem ipsum</p>
            </div>
        </div>
    );
};

export default SectionList;