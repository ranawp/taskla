import React from 'react';
import './SignupBanner.css';
import banner from '../../../asset/signup.jpg'
import { Link } from 'react-router-dom';

const SignupBanner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className='my-20' >
            <div className='md:w-[50%] mx-auto text-white p-10' >
                <h2 className='text-center text-3xl font-serif font-semibold my-5' > Start your journey</h2 >
                <p className='text-center my-3 tracking-wider text-slate-200 text-[16px] ml-5' > Click the button below and get started on a 30 days free trial</p >
                <div className='flex justify-center my-10' >
                    <Link to='/register'><button className='btn bg-blue-600'>Get Started</button></Link >
                </div >
            </div >
        </div >
    );
};

export default SignupBanner;