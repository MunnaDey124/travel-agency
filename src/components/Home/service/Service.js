import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';



const Service = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('https://calm-woodland-10758.herokuapp.com/ServiceLIst')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="container pt-5 pb-5">
            <div className="row">
                {
                    services.map(service =><ServiceCard service={service}></ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default Service;