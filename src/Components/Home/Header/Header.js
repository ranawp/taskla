import React from 'react';
<<<<<<< HEAD
import './Header.css'
=======
import { Link } from 'react-router-dom';
import './Headre.css'
>>>>>>> fa7520219c4512d8cb2f65e5a5c4e0876be2b5cd

const Header = () => {
    return (
        <div className='header  grid md:grid-cols-2  banner  '>
            <div className='ml-8 my-auto left-side-info left-side'>

                <h1 className='text-4xl font-bold md:mt-20 mt-4 font-serif tracking-wide'>Learn by giving <br /> feedback </h1>

<<<<<<< HEAD
=======
                <p className='text-lg mt-3 tracking-wide leading-7 text-gray-700'>
                    Taskla is an online platform to facilitate peer feedback sessions with students
>>>>>>> fa7520219c4512d8cb2f65e5a5c4e0876be2b5cd

                <p className='text-lg mt-3 tracking-wide leading-7 text-gray-700'>
                    Peergrade is an online platform to facilitate peer feedback sessions with students</p>

                <Link to='/register'><button className='btn bg-blue-700 border-0 mt-4 button mr-5 rounded text-white px-3 py-1'>Get Started</button></Link>
            </div>
            <div className='mr-10 my-auto right-side'>
                <img src="https://i.ibb.co/LQ7Hzpx/banner-img.png" alt="" />
            </div>
        </div>
    );
};

export default Header;