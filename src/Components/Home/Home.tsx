import React from 'react';
import Review from '../Review/Review';
import Allacordian from './AccordianSection/Allacordian';

import Benifit from './Benifit/Benifit';

import ContactUs from './ContactUs';

import Header from './Header/Header';
import SignupBanner from './SignupBanner/SignupBanner';
import { Link } from 'react-router-dom';

import CourseDetails from './CourseDetails/CourseDetails';
import Certificate from './certificate/Certificate';


import Gallery from './Gallery/Gallery';
import AboutDeveloper from './AboutDeveloper/AboutDeveloper';
import Feature from './Feature/Feature';
import WhatWeLearn from './WhatWeLearn/WhatWeLearn';

const Home = () => {
    return (
        <div>

            <div className='mt-[100px]'>
                <Header></Header>
                <Benifit />
                <CourseDetails></CourseDetails>
                <WhatWeLearn/>
                <Certificate></Certificate>
                <Gallery />
                <Feature/>
                <Review />
                <Allacordian></Allacordian>
                <AboutDeveloper></AboutDeveloper>
            </div >
        </div >
    );
};

export default Home;




