import React from 'react';
import Review from '../Review/Review';
import Allacordian from './AccordianSection/Allacordian';
import Header from './Header/Header';
import SignupBanner from './SignupBanner/SignupBanner';

const Home = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Header></Header>
                <Allacordian></Allacordian>
            </div>
            <Review />
            <SignupBanner />
        </div>
    );
};

export default Home;