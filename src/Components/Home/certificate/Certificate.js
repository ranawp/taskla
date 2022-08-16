import React from 'react';
import './Certificate.css'

const Certificate = () => {
    // https://taskla.netlify.app/
    return (
        <div className='container mt-12'>
          <h1 className=" text-3xl text-center  font-bold">We will get End of <span className='text-primary'>course</span></h1>

           
        <div className="grid justify-center gap-6">
        <div className='card shadow-lg  gap-4   sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid align-center justify-center p-6'>
            <div className="box-style m-12">
                <div className="imageBox">
                <img className='w-48' src="https://i.ibb.co/HVBwZ9v/111111111111111.jpg" class="max-w-sm rounded-lg shadow-2xl" alt="" />

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
                <img className='w-48' src="https://i.ibb.co/gwjFtJ7/9999999.jpg" class="max-w-sm rounded-lg shadow-2xl" alt="" />

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
                <img className='w-48' src="https://i.ibb.co/MhLL0gT/01010101.jpg" class="max-w-sm rounded-lg shadow-2xl" alt="" />

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
    );
};

export default Certificate;