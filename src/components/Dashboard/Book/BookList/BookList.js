import React, { useEffect, useState } from 'react';
import SideBarDash from '../../SideBarDash/SideBarDash';
import { Table } from 'react-bootstrap';


const BookList = () => {
const [orders, setOrder] = useState([])
    useEffect( () => {
        fetch('https://calm-woodland-10758.herokuapp.com/orderLIst')
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [])
    return (
        <section className="container-fluid row" >
            <div className="col-md-3">
            <SideBarDash></SideBarDash>
        </div>
        <div className="col-md-9 mt-5">
        <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Place</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order) => (
                            <tr key={order._id}>
                                <td>{order.name}</td>
                                <td>{order.Email}</td>
                                <td>{order.place}</td>
                                <td>{order.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
        </section>
    );
};

export default BookList;