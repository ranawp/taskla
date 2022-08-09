import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

import './Review.css';

const ReviewCard = ({ review }) => {
    const { name, course, image, message, rating } = review;

    const [allRating, setAllRating] = useState(0);

    const ratingChanged = (newRating) => {
        setAllRating(newRating);
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={image} alt='' />
                    </div>
                </div >
            </figure >
            <div className="card-body items-center text-center" >
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={35}
                    value={rating}
                    activeColor="#ffd700"
                />
                <h2 className="text-2xl font-bold" > {name}</h2 >
                <p className='text-lg' > {course}</p >
                <p>{message}</p>
            </div >
        </div >
    );
};

export default ReviewCard;