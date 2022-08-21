import React from 'react';
import './Certificate.css'
import { AiFillStar } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';


const Certificate = () => {

    return (
        <div className='mt-[70px] relative'>
            <div className='absolute text-[50px] text-purple-200  top-[30%] left-[50px]'>
                <AiFillStar />
            </div>
            <div className='absolute text-[50px] text-primary opacity-30 top-0 left-[10%]'>
                <FaGraduationCap />
            </div>
            <div className='container mx-auto pt-12'>
                <h1 className=" text-3xl text-center text-primary font-bold">We will get <span className='text-secondary'>End of Course</span></h1>


                <div className="grid justify-center gap-6">
                    <div className='card shadow-md  gap-4   sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid align-center justify-center px-6'>
                        <div className="box-style m-12">
                            <div className="imageBox ">
                                <img className='w-48 ' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-design-template-23c938b8b40c0633fe90f7a41be1fb5a_screen.jpg?ts=1646644068" classNeme="max-w-sm rounded-lg shadow-2xl" alt="" />

                            </div>
                            <div className="content">
                                <h2 className='text-4xl text-center'>Certificate</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
                                    eos neque. Animi itaque fuga reprehenderit maxime nemo dolorum
                                    necessitatibus beatae porro dicta dolore,
                                    possimus,?</p>
                            </div>
                        </div>

                        <div className="box-style m-12">
                            <div className="imageBox">
                                <img className='w-48' src="https://i.ibb.co/gwjFtJ7/9999999.jpg" classNeme="max-w-sm rounded-lg shadow-2xl" alt="" />

                            </div>
                            <div className="content">
                                <h2 className='text-4xl text-center'>Job</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
                                    eos neque. Animi itaque fuga reprehenderit maxime nemo dolorum
                                    necessitatibus beatae porro dicta dolore,
                                    possimus,?</p>
                            </div>
                        </div>

                        <div className="box-style m-12">
                            <div className="imageBox">
                                <img className='w-48' src="https://devabit.com/wp-content/uploads/2018/07/adult-business-businessman-1061588-e1550068468107.jpg" classNeme="max-w-sm rounded-lg shadow-2xl" alt="" />

                            </div>
                            <div className="content">
                                <h2 className='text-4xl text-center'>Supports</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
                                    eos neque. Animi itaque fuga reprehenderit maxime nemo dolorum
                                    necessitatibus beatae porro dicta dolore,
                                    possimus,?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificate;