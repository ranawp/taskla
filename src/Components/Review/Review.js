import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./Review.css";
import './Review.css'

import { Autoplay,EffectCoverflow, Pagination, Navigation, FreeMode } from "swiper";
import ReviewCard from './ReviewCard';

const Review = () => {

    const [reviewCard, setReviewCard] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-stream-86241.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviewCard(data))
    }, [])

    return (
        <div className='h-[600px] mt-32' >
            <h1 className='text-center capitalize text-[32px] font-bold text-primary pt-10' > What <span className='text-secondary'>People</span> are saying
            </h1 >
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                freeMode={true}
                // effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}

                pagination={true}
                modules={[Autoplay,FreeMode,EffectCoverflow, Pagination, Navigation]}
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