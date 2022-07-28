import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./Review.css";
import './Review.css'

import { EffectCoverflow, Pagination } from "swiper";

const Review = () => {
    return (
        <div className='h-[600px] '>
            <h1 className='text-center text-4xl font-bold text-gray-500 pt-10'>What people are saying
            </h1>
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

                <SwiperSlide>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqYGTo0fiyIaEafNboSfDqqoVwbMGj8sqxFDrRBcm8m5pAgkfr29BcuK1-Lu_0C1TqpU&usqp=CAU" alt=''/>
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-bold">Willard Volding</h2>
                            <p className='text-lg'>English Teacher</p>
                            <p>Taskla is a good learning website for ever. It maintain student to give learning task. It use so comfortable. We can give a student everyday task.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://t3.ftcdn.net/jpg/02/48/15/86/360_F_248158608_0ErNeAWWx6GZVDCg66jNRoPGEhHCSpaJ.jpg" alt=''/>
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-bold">Chris Cole</h2>
                            <p className='text-lg'>Educational Technology Coordinator</p>
                            <p>Taskla is the best thing to happen to writing in a long, long time. With a well-designed, I can teach students to become editors themselves.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg" alt=''/>
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-bold">Morten Taboe Nybor</h2>
                            <p className='text-lg'>Assistant Professor</p>
                            <p>It is a good way for students to become familiar with the criteria, providing feedback sharpens their thinking, it's useful for both receivers and givers of feedback and it's good for learning together.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg" alt=''/>
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-bold">William Mark</h2>
                            <p className='text-lg'>English Teacher</p>
                            <p>Taskla is a good learning website for ever. It maintain student to give learning task. It use so comfortable. We can give a student everyday task.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>


        </div>
    );
};

export default Review;