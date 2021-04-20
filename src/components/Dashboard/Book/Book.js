import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import SideBarDash from '../SideBarDash/SideBarDash';

const Book = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log('submit',data)
        // const newData ={
        //     ...loggedInUser,
        //     ...books,
        //     shipment:data

        // }
        
        fetch('https://calm-woodland-10758.herokuapp.com/placeOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('order place successfully');
            }
        })
    }

     const [loggedInUser]=useContext(UserContext);
        const {bookingId} = useParams();
        const [books ,setBooks]=useState({});
    useEffect(()=>{
        const url =`https://calm-woodland-10758.herokuapp.com/ServiceLIst/${bookingId}`;
    fetch(url)
        .then(res => res.json())
        .then(data=>setBooks(data));
    },[bookingId])

    return (
        <section className="container-fluid row" >
            <div className="col-md-3">
            <SideBarDash></SideBarDash>
        </div>
        <div className="col-md-9 mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-3">
      <input defaultValue={loggedInUser.name} {...register("name")} />
      </div>
      <div className="form-group mb-3">
      <input type="email" defaultValue={loggedInUser.email} {...register("Email", { required: true })} />
      </div>
      <div className="form-group mb-3">
      <input  defaultValue={books.name} {...register("place", { required: true })} />
      </div>
      <div className="form-group mb-3">
      <input  defaultValue={books.price} {...register("price", { required: true })} />
      </div>
      
      <input className=" button btn btn-primary" type="submit" value="place order" />
    </form>
        </div>
        </section>
    );
};

export default Book;