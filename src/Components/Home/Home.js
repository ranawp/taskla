import React from 'react';
import Review from '../Review/Review';
import Allacordian from './AccordianSection/Allacordian';

import Benifit from './Benifit/Benifit';

import ContactUs from './ContactUs';

import Header from './Header/Header';
import SignupBanner from './SignupBanner/SignupBanner';
import laptop from '../../asset/laptop.svg';
import football from '../../asset/football.svg';
import { Link } from 'react-router-dom';

import CourseDetails from './CourseDetails/CourseDetails';
import Certificate from './certificate/Certificate';


import Gallery from './Gallery/Gallery';
import AboutDeveloper from './AboutDeveloper/AboutDeveloper';


const Home = () => {
    return (
        <div>

            <div className=''>
                <Header></Header>
                <Benifit />
                <CourseDetails></CourseDetails>
                <Certificate></Certificate>
                <Gallery />

                <div className='mt-32 lg:w-4/5 mx-auto relative'>

                    <div>
                        <div className='bg-[#FCF7F1] px-8 py-20
                        text-left lg:text-center '>

                            <h1 className='text-5xl font-serif leading-[1.3]
                            '>Taskla helps to improve discipline and make student hard worker by using Remind education solutions</h1>
                            <Link to='/register'><button className='btn btn-secondary mt-5'>Get Started</button></Link>
                        </div >

                    </div >
                    <img src={football} className="block absolute right-[-110px] bottom-[-90px]" alt="" />
                    <img src={laptop} className="hidden lg:block absolute left-[-300px] bottom-[-100px]" alt="" />
                </div >
            </div >
            <Review />
            <Allacordian></Allacordian>
            <AboutDeveloper></AboutDeveloper>
            {/*
            <ContactUs /> */}


        </div >
    );
};

export default Home;