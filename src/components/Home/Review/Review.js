import React, { useEffect, useState } from 'react';
import ReviewItem from './ReviewItem/ReviewItem';
import './Review.css';
// const reviewList=[
//     {
//         place:'Madrid',
//         name:'Sam Smith',
//         img:'https://i.ibb.co/DWDcCZL/user-img-6.png'
//     },
//     {
//         place:'Barcelona',
//         name:'James Fisher',
//         img:'https://i.ibb.co/HtbLj6m/user-img-5.png'
//     },
//     {
//         place:'Tarragona',
//         name:'Susan Day',
//         img:'https://i.ibb.co/0ckLZRP/user-img-4.png'
//     },
// ]

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('https://calm-woodland-10758.herokuapp.com/reviewList')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div className="review_container mt-5 mb-3">
        <div className=" container  text-center pt-5">
            <h1>Top Reviews</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean<br/> commodo ligula eget dolor. Aenean massa. Cum</p>
            <div className="row review_style  pt-3 mt-5 img-fluid">
                {
                  reviews.map(review =><ReviewItem review={review}></ReviewItem>)  
                }

            </div>
            
        </div>
        </div>
    );
};

export default Review;