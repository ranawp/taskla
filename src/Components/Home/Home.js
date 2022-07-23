import React from 'react';
import Review from '../Review/Review';
import Allacordian from './AccordianSection/Allacordian';
// import AccordianSection from './AccordianSection/AccordianSection';

import Header from './Header/Header';
import SignupBanner from './SignupBanner/SignupBanner';

const Home = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Header></Header>
                <Allacordian></Allacordian>
                {/* <AccordianSection></AccordianSection> */}
            </div>
            <Review></Review>
            <SignupBanner />
        </div>
    );
};

export default Home;