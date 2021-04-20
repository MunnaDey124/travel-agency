import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const Manageservices = () => {

    const deleteEvent = id=>{
        fetch(`https://calm-woodland-10758.herokuapp.com/deleteService/`+ id , {
            method:'DELETE'

        })
        .then(res =>res.json())
        .then(result =>{
            if(result){
              alert("delete success",result)
        }
        });

    }



    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('https://calm-woodland-10758.herokuapp.com/ServiceLIst')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <section className="container-fluid row ">
        <div className="col-md-3">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 mt-5" >
        <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {
                        services.map((service) => (
                            <tr key={service._id}>
                                <td>{service.name}</td>
                                <td>{service.description}</td>
                                <td>{service.price}</td>
                                <td><button onClick={()=>deleteEvent(service._id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
        </section>
    );
};

export default Manageservices;