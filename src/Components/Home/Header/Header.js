import React from 'react';
import './Header.css'

const Header = () => {
    return (

        <div className='header  grid md:grid-cols-2  banner  '>
            <div className='ml-8 my-auto left-side-info left-side'>

                <h1 className='text-4xl font-bold md:mt-20 mt-4 font-serif tracking-wide'>Learn by giving <br /> feedback </h1>


                <p className='text-lg mt-3 tracking-wide leading-7 text-gray-700'>
                    Peergrade is an online platform to facilitate peer feedback sessions with students</p>

                <a href="https://drive.google.com/file/d/10XyLv0K1zxlxTXgLKRGnD-ZwVxeBRSuP/view?usp=sharing" target="_blank"><button className='btn bg-blue-700 border-0 mt-4 button mr-5 rounded text-white px-3 py-1'>Get Started</button></a>
                {/* 
                <a href='#contact' className='hier-button  px-3 py-1 rounded-full text-accent'>Register</a> */}


            </div>
            <div className='mr-10 my-auto right-side'>
                <img src="https://i.ibb.co/LQ7Hzpx/banner-img.png" alt="" />
            </div>
        </div>



    );
};

export default Header;