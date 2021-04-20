import React from 'react';
import { Link } from 'react-router-dom';
import './serviceCard.css';

const ServiceCard = ({ service }) => {
    return (
        <div className="col-md-3">
            <div class="card">
                { service.image ? <img src={`data:image/png;base64,${service.image.img}`} alt="" srcset=""/>
                :
                    <img src={service.img} className="img-fluid" class="card-img-top" alt="..." />
                }
                <div class="card-body">
                    <h5 class="card-title">{service.name}</h5>
                    <p class="card-text">{service.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{service.price}$</li>
                </ul>
                <div class="card-body">
                <Link to ={`/book/${service._id}`}><a  class="card-link btn ">Book Now</a></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;