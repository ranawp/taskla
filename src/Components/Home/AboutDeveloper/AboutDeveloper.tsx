import React from 'react';


const AboutDeveloper = () => {
    return (
        <div className='grid justify-center mt-16 mb-16'>
            <h1 className="text-4xl text-center text-primary dark:text-slate-50 font-bold">Our<span className="text-secondary">Team</span></h1>


            {/* .............................................................. */}
            <div className='card  mt-12 gap-5  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center p-6'>



                {/* ......................... */}
                <div className="card w-90 bg-white dark:bg-[#182233] shadow-xl">
                    <figure className="px-10 pt-10">
                        <img className="mask mask-circle w-[120px]" src="https://i.ibb.co/nMYfnL9/download.jpg" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title dark:text-slate-50">Rana Akash</h2>
                        <p className="text-primary dark:text-slate-50 font-bold">CEO & Founder</p>

                        <div className="flex justify-center">
                            <i className="fa-brands fa-facebook dark:text-slate-200 text-primary p-4 text-2xl "></i>
                            <i className="fa-brands fa-instagram text-red-500 font-bold p-4 text-2xl "></i>
                            <i className="fa-brands fa-github dark:text-slate-200 text-black p-4 text-2xl  "></i>
                            <i className="fa-brands fa-linkedin dark:text-[#0B63BD] text-primary p-4 text-2xl "></i>

                        </div>

                    </div>
                </div>
                {/* ......................... */}
                {/* ......................... */}
                <div className="card w-96 bg-white dark:bg-[#182233] shadow-xl">
                    <figure className="px-10 pt-10">
                        <img className="mask mask-circle w-[120px]" src="https://i.ibb.co/t8SgFp9/photo-1519085360753-af0119f7cbe7.jpg
" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title dark:text-slate-50">Masud Rana</h2>
                        <p className="text-primary dark:text-slate-50 font-bold">Chief Operating Officer</p>


                        <div className="flex justify-center">
                            <i className="fa-brands fa-facebook dark:text-slate-200 text-primary p-4 text-2xl "></i>
                            <i className="fa-brands fa-instagram text-red-500 font-bold p-4 text-2xl "></i>
                            <i className="fa-brands fa-github dark:text-slate-200 text-black p-4 text-2xl  "></i>
                            <i className="fa-brands fa-linkedin dark:text-[#0B63BD] text-primary p-4 text-2xl "></i>

                        </div>
                    </div>
                </div>
                {/* ......................... */}

                {/* ......................... */}
                <div className="card w-96 bg-white dark:bg-[#182233] shadow-xl">
                    <figure className="px-10 pt-10 w-25%">
                        <img className="mask mask-circle w-[150px]" src="https://i.ibb.co/Rp4khnx/pngwing-com.png" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title dark:text-slate-50">Mozahid Ahmed</h2>
                        <p className="text-primary dark:text-slate-50 font-bold">Software Engineer</p>


                        <div className="flex justify-center">
                            <i className="fa-brands fa-facebook dark:text-slate-200 text-primary p-4 text-2xl "></i>
                            <i className="fa-brands fa-instagram text-red-500 font-bold p-4 text-2xl "></i>
                            <i className="fa-brands fa-github dark:text-slate-200 text-black p-4 text-2xl  "></i>
                            <i className="fa-brands fa-linkedin dark:text-[#0B63BD] text-primary p-4 text-2xl "></i>

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
