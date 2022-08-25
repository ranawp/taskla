import React from 'react';
import './CourseDetails.css';

const CourseDetails = () => {
    return (
        <div className='mt-[70px] relative'>
            <div className='w-[50px] h-[50px] opacity-20 filter blur rounded-full bg-yellow-500 absolute top-[90px]'></div>
            <div className='w-[50px] h-[50px] opacity-20  rounded-full bg-purple-500 absolute top-[50px] left-[120px] z-0'></div>
            <div className='w-[100px] h-[100px] opacity-20 rounded-full bg-pink-700 absolute bottom-0 right-12'></div>
            {/* <div className='w-[50px] h-[50px] opacity-20 blur rounded-full bg-purple-500 absolute top-[90px]'></div> */}

            <div className='max-w-screen-xl mx-auto'>
                <h1 className="text-[32px] text-center text-primary font-bold">Everything in this<span className='text-secondary'> Course</span></h1>
                <div className='card   border-2 shadow-inner mt-6   grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center p-6'>


                    <div className="lg:max-w-lg bg-base-100  items-center text-center grid justify-center card-style  lg:border-r-2 lg:border-b-2 sm:border-b-4">
                        <div className="animation">
                            <div className='grid justify-center hover:text-[#C11A7E] text-blue-400'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-colorful" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M14.25 4.74L11 6.62V4.5l-.5-.5h-9l-.5.5v7l.5.5h9l.5-.5v-2l3.25 1.87.75-.47V5.18l-.75-.44zM10 11H2V5h8v6zm4-1l-3-1.7v-.52L14 6v4z"></path></svg>


                            </div>
                            <h3 className='font-bold mt-2 text-1xl font'>15 modules,700+ video</h3>

                            <p className='text-justify'>
                                The entire course is divided into 12 modules and 135+ videos so that you can learn step by step.
                                The entire course is divided into 12 modules and 135+ videos so that you can learn step by step.
                                The entire course is divided into 12 modules
                            </p>
                        </div>
                    </div>



                    <div className="lg:max-w-lg bg-base-100  items-center text-center grid justify-center card-style  lg:border-r-2 lg:border-b-2 sm:border-b-4">
                        <div className="animation">
                            <div className='grid justify-center hover:text-[#C11A7E] text-red-500'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-colorful" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 15v-1c2 0 2-.6 2-1H1.5l-.5-.5v-10l.5-.5h13l.5.5v9.24l-1-1V3H2v9h5.73l-.5.5 2.5 2.5H4zm7.86 0l2.5-2.5-.71-.7L12 13.45V7h-1v6.44l-1.64-1.65-.71.71 2.5 2.5h.71z"></path></svg>


                            </div>
                            <h3 className='font-bold mt-2 text-1xl font'>30+ record-content</h3>

                            <p className='text-justify'>
                                Video size and duration are
                                We have followed project based learning process throughout the course. In the course we will do 10 projects together. optimized taking into account time and bandwidth consumption.</p>
                        </div>
                    </div>






                    <div className="lg:max-w-lg bg-base-100 items-center text-center grid justify-center card-style  lg:border-b-2">
                        <div className="animation">
                            <div className='grid justify-center hover:text-[#C11A7E] text-green-600 text-colorful'>
                                <svg stroke="currentColor" className='grid text-center' fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.57 6.699l5.693-4.936L8.585 1 3.273 5.596l-1.51-1.832L1 4.442l1.85 2.214.72.043zM15 5H6.824l2.307-2H15v2zM6 7h9v2H6V7zm9 4H6v2h9v-2z"></path></svg>


                            </div>
                            <h3 className='font-bold mt-2 text-1xl font'>70+ quaze</h3>

                            <p className='text-justify'>

                                There will be quizzes with explanations
                                We have followed project based learning process throughout the course. In the course we will do 10 projects together. and answers at the end of each video so that you can check your progress as you learn.</p>
                        </div>
                    </div>








                    <div className="lg:max-w-lg bg-base-100 items-center text-center grid justify-center card-style lg:border-r-2 ">
                        <div className="animation">
                            <div className='grid justify-center text-orange-500'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-colorful" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"></path></svg>

                            </div>
                            <h3 className='font-bold mt-2 text-1xl font'>12 assignment</h3>

                            <p className='text-justify'>
                                At the end of each module there will be
                                We have followed project based learning
                                process throughout the course. In the course we will
                                do 10 projects together. large assignments that you
                                will do on your own. Solution of each assignment
                                will be given in live session.</p>
                        </div>

                    </div>




                    <div className="lg:max-w-lg bg-base-100 items-center text-center grid justify-center card-style lg:border-r-2  ">

                        <div className="animation">
                            <div className='grid justify-center text-purple-600'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-colorful" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M824.2 699.9a301.55 301.55 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"></path></svg>


                            </div>
                            <h3 className='font-bold mt-2 text-1xl font'>10 live session</h3>

                            <p className='text-justify'>
                                There will be weekly live sessions where we will

                                We have followed project based learning process throughout the course. In the course we will do 10 projects together.
                                discuss important topics and answer your questions.</p>
                        </div>
                    </div>


                    <div className="lg:max-w-lg bg-base-100 items-center text-center grid justify-center card-style">

                        <div className="animation ">
                            <div className='grid justify-center text-pink-700 font-bold text-5xl'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-colorful" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.5 1h13l.5.5v12l-.5.5h-13l-.5-.5v-12l.5-.5zM2 5v8h12V5H2zm0-1h12V2H2v2z"></path></svg>

                            </div>
                            <h3 className='font-bold mt-2 text-1xl font'>10 project</h3>


                            <p className='text-justify'>


                                We have followed project based learning process throughout the course. In the course we will do 10 projects together.
                                We have followed project based learning process throughout the course. In the course we will do 10 projects together.</p>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default CourseDetails;