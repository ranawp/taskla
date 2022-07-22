import React from 'react';
import Review from '../Review/Review';
import AccordianSection from './AccordianSection';
import Header from './Header/Header';

const Home = () => {
    return (
        <>
            <Header></Header>
            <AccordianSection></AccordianSection>
            <Review></Review>

        </>
    );
};

export default Home;