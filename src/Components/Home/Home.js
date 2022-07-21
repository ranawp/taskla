import React from 'react';
import Review from '../Review/Review';
import AccordianSection from './AccordianSection';
import Header from './Header/Header';
import SignupBanner from './SignupBanner/SignupBanner';

const Home = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Header></Header>
                <AccordianSection></AccordianSection>
                

            </div>
            <Review></Review>
            <SignupBanner />
        </div>
    );
};

export default Home;