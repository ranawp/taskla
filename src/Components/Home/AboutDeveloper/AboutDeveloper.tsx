import React from 'react';


const AboutDeveloper = () => {
    return (
        <div className=' mt-16 mb-16'>
            <h1 className="text-4xl text-center text-primary font-bold">Our<span className="text-secondary">Team</span></h1>


            {/* .............................................................. */}
            <div className='card  mt-12 gap-5  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center p-6'>



                {/* ......................... */}
                <div className="card w-70 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img className="mask mask-circle w-[120px]" src="https://i.ibb.co/nMYfnL9/download.jpg" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Rana Akash</h2>
                        <p className="text-primary font-bold">CEO & Founder</p>

                        <div className="flex justify-center">
                            <i className="fa-brands fa-facebook text-primary p-4 text-2xl "></i>
                            <i className="fa-brands fa-instagram text-red-500 font-bold p-4 text-2xl "></i>
                            <i className="fa-brands fa-github text-black p-4 text-2xl  "></i>
                            <i className="fa-brands fa-linkedin text-primary p-4 text-2xl "></i>

                        </div>

                    </div>
                </div>
                {/* ......................... */}
                {/* ......................... */}
                <div className="card w-70 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img className="mask mask-circle w-[120px]" src="https://i.ibb.co/t8SgFp9/photo-1519085360753-af0119f7cbe7.jpg
" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Masud Rana</h2>
                        <p className="text-primary font-bold">Chief Operating Officer</p>


                        <div className="flex justify-center">
                            <i className="fa-brands fa-facebook text-primary p-4 text-2xl "></i>
                            <i className="fa-brands fa-instagram text-red-500 font-bold p-4 text-2xl "></i>
                            <i className="fa-brands fa-github text-black p-4 text-2xl  "></i>
                            <i className="fa-brands fa-linkedin text-primary p-4 text-2xl "></i>

                        </div>
                    </div>
                </div>
                {/* ......................... */}

                {/* ......................... */}
                <div className="card w-70 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 mt-8">
                        <img className="mask mask-circle w-[120px]" src="https://i.ibb.co/HhfHKk1/depositphotos-41538961-stock-photo-indian-business-man.webp
" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mt-10">Muzahidul islam</h2>
                        <p className="text-primary font-bold">Software engineer</p>


                        <div className="flex justify-center">
                            <i className="fa-brands fa-facebook text-primary p-4 text-2xl "></i>
                            <i className="fa-brands fa-instagram text-red-500 font-bold p-4 text-2xl "></i>
                            <i className="fa-brands fa-github text-black p-4 text-2xl  "></i>
                            <i className="fa-brands fa-linkedin text-primary p-4 text-2xl "></i>

                        </div>
                    </div>
                </div>

                {/* ......................... */}






            </div>
            {/* .............................................................. */}


        </div>
    );
};

export default AboutDeveloper;
