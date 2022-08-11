import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./Review.css";
import './Review.css'

import { EffectCoverflow, Pagination } from "swiper";
import ReviewCard from './ReviewCard';

const Review = () => {

    const [reviewCard, setReviewCard] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviewCard(data))
    }, [])

    return (
        <div className='h-[600px] mt-32' >
            <h1 className='text-center text-4xl font-bold text-gray-500 pt-10' > What people are saying
            </h1 >
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >

                {reviewCard.map((review, index) => <SwiperSlide>
                    <ReviewCard
                        review={review
                        } /></SwiperSlide>)}
            </Swiper >
        </div >
    );
};

export default Review;