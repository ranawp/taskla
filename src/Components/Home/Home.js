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


const Home = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Header></Header>
                <Allacordian></Allacordian>
                <Benifit />
                <CourseDetails></CourseDetails>
                <Certificate></Certificate>
                <div className='mt-32 lg:w-4/5 mx-auto relative'>

                    <div>
                        <div className='bg-[#FCF7F1] px-24 py-20
                        text-center '>

                            <h1 className='text-5xl font-serif
                            '>Taskla helps to improve discipline and make student hard worker by using Remind education solutions</h1>
                            <Link to='/register'><button className='btn btn-primary mt-5'>Get Started</button></Link>
                            {/* <img src={laptop} alt="" /> */}
                        </div >

                    </div >
                    <img src={football} className="hidden lg:block absolute right-[-110px] bottom-[-80px]" alt="" />
                    <img src={laptop} className="hidden lg:block absolute left-[-300px] bottom-[-100px]" alt="" />
                </div >
            </div >
            <Review />
            <SignupBanner />
            <ContactUs />
        </div >
    );
};

export default Home;