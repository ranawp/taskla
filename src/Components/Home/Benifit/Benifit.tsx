import React from 'react';
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import { BsCodeSquare } from 'react-icons/bs';
import { RiProjector2Line } from 'react-icons/ri';
import { RiGalleryLine } from 'react-icons/ri';
import { GiPalmTree } from 'react-icons/gi';
import { IoIosPeople } from 'react-icons/io';

const Benifit = () => {
    return (
        <div className='relative mt-28'>
            <div className='w-[200px] h-[200px] opacity-20 blur rounded-full bg-purple-500 absolute -left-16 top-[90px]'></div>
            <div className='w-[200px] h-[200px] opacity-20 blur rounded-full bg-pink-500 absolute left-10 top-[200px]'></div>
            <div className='w-[200px] h-[200px] opacity-20 blur rounded-full bg-cyan-300 absolute -left-16 top-[260px]'></div>

            <div className='w-[200px] h-[200px] opacity-20 blur rounded-full bg-yellow-600 absolute bottom-[50px] -right-16'></div>
            <div className='w-[200px] h-[200px] opacity-30 filter blur rounded-full bg-[#0F67B7] absolute bottom-[160px] right-10'></div>
            <div className='w-[200px] h-[200px] opacity-30 blur rounded-full bg-green-500 absolute bottom-[200px] -right-16'></div>
            <div className='mt-[70px] max-w-screen-xl mx-auto relative'>
                <h1 className='text-[32px] font-bold text-center text-primary dark:text-slate-50'>So Much More <span className=' text-secondary'>Than A Binder</span></h1 >
                <div className="grid gap-x-8 gap-y-8 lg:grid-cols-2 mt-14 dark:text-slate-100" >

                    <div className="flex p-5" >
                        <div className='pr-5' >
                            <BsReverseLayoutTextSidebarReverse className='text-[30px] text-purple-700' />
                            {/* <img className='w-14' src={paper} alt="" /> */}
                        </div >
                        <div>
                            <h2 className='text-xl font-bold'>Paperless Organization</h2>
                            <p className='pt-3 text-[16px]' > Convert all your paper binders into an organized display of tabs and sub tabs that is easy for your audience to navigate online.</p >
                        </div >
                    </div >

                    <div className="flex p-5" >
                        <div className='pr-5' >
                            <BsCodeSquare className='text-[30px] text-pink-700' />
                        </div >
                        <div>
                            <h2 className='text-xl font-bold'>One Gateway To Your Online Resources</h2>
                            <p className='pt-3 text-[16px]' > Combine all your URLs and uploaded files into one seamless package to make it easy for your stakeholders to retrieve.</p >
                        </div >
                    </div >
                    <div className="flex p-5" >
                        <div className='pr-5' >
                            <RiProjector2Line className='text-[30px] text-cyan-400' />
                        </div >
                        <div>
                            <h2 className='text-xl font-bold'>Communicate Your Value</h2>
                            <p className='pt-3 text-[16px]' > You’re an indispensable resource to your network of colleagues, clients and students.Make sure they have complete access to readily available content that can be curated with ease.</p >
                        </div >
                    </div >
                    <div className="flex p-5" >
                        <div className='pr-5' >
                            <RiGalleryLine className='text-[30px] text-red-600' />
                        </div >
                        <div>
                            <h2 className='text-xl font-bold'>Context Matters</h2>
                            <p className='pt-3 text-[16px]' > Easily add notes and instructions next to your documents to help guide your audience through your resources.</p >
                        </div >
                    </div >
                    <div className="flex p-5" >
                        <div className='pr-5' >
                            <GiPalmTree className='text-[30px]  text-green-700' />
                        </div >
                        <div>
                            <h2 className='text-xl font-bold'>Save The Environment</h2>
                            <p className='pt-3 text-[16px]' > The environmental threat of paper is no secret.Digitizing content consolidates information, cuts costs and makes the world healthier for everyone.</p >
                        </div >
                    </div >
                    <div className="flex p-5" >
                        <div className='pr-5' >
                            <IoIosPeople className='text-[30px] text-blue-500' />
                        </div >
                        <div>
                            <h2 className='text-xl font-bold'>Outstanding Support</h2>
                            <p className='pt-3 text-[16px]' > We know how busy you are.You've got better things to do than figure out a new software. We make sure we are available to help answer your questions.</p>
                        </div >
                    </div >

                </div >

            </div >
        </div>
    );
};

export default Benifit;