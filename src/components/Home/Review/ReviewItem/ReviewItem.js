import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ review }) => {
    return (
        <div className="col-md-4 pr-3 ">
            <div className="card_style">
                <div>
                    {review.image ? <img className="pt-5"  style={{height: '200px'}} src={`data:image/png;base64,${review.image.img}`} alt="" srcset=""/>
                        :
                        <img className="pt-5" src={review.img} alt="" />
                    }
                </div>
                <div>
                    <h3>{review.name}</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, velit.</p>
                    <h6>visited Place:<h3>{review.place}</h3></h6>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;