import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import './Review.css';
import { RiDoubleQuotesL } from 'react-icons/ri'


const ReviewCard = ({ review }) => {
    const { name, course, image, message, rating } = review;

    // const [allRating, setAllRating] = useState(0);

    // const ratingChanged = (newRating) => {
    //     setAllRating(newRating);
    // };

    return (
        <div className="card w-96  shadow-xl relative bg-white dark:bg-[#182233]">
            <div className='absolute top-5 left-5 text-5xl text-secondary font-extrabold'><RiDoubleQuotesL/></div>
            <figure className="px-10 pt-10">
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={image} alt='' />
                    </div>
                </div >
            </figure >
            <div className="card-body items-center text-center dark:text-slate-50" >
                <ReactStars
                    count={5}
                    size={25}
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