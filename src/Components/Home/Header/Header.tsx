import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import moment from 'moment';
import banner from '../../../asset/hero-bg.png'
import hero from '../../../asset/hero.png'


const Header = () => {
    return (
        <div className='mt-[40px] bg-cover h-[600px] lg:h-[550px]  relative' style={{ backgroundImage: `url(${banner})` }}>
            <div className='max-w-screen-xl mx-auto'>
                <div className='grid-cols-2'>
                    <div className='p-5 lg:top-[20px] w-full pb-32'>
                        <h1 className='text-[32px] lg:text-[45px] text-primary font-bold md:mt-20 mt-4 tracking-wide' > Believe Bigger, Aim Higher </h1 >
                        <h2 className='text-[32px] font-bold text-secondary tracking-wide'>Taskla <span className='text-primary'>are with you</span></h2>
                        <p className='text-lg mt-3 tracking-wide leading-7 text-[#1e266d]' >
                            Taskla is an online platform to facilitate peer feedback sessions <br /> with students

                            Get started</p >

                        <Link to='/register'><button className='btn btn-secondary mt-5 text-white'>Get Started</button></Link>
                    </div >
                    <div className='absolute my-auto bottom-0 right-0'>
                        <img className='w-[700px]' src={hero} alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;