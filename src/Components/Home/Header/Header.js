import React from 'react';
import './Header.css'

const Header = () => {
    return (

        <div className=' header  grid md:grid-cols-2  banner  '>
            <div className='ml-20 my-auto left-side-info left-side'>

                <h1 className='md:text-3xl font-bold md:mt-20 mt-4'>Learn by giving feedback </h1>

                <a href="https://drive.google.com/file/d/10XyLv0K1zxlxTXgLKRGnD-ZwVxeBRSuP/view?usp=sharing" target="_blank"><button className=' mt-4 button mr-5 rounded text-accent px-3 py-1'>Get Started</button></a>
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