import React from 'react';
import paper from '../../../asset/benefit/sidebar.png';
import coding from '../../../asset/benefit/web-programming.png';
import communicate from '../../../asset/benefit/projector.png';
import context from '../../../asset/benefit/gallery.png';
import tree from '../../../asset/benefit/tree.png';
import support from '../../../asset/benefit/group-users.png';

const Benifit = () => {
    return (
        <div>
            <h1 className='text-3xl text-center'><span className=' text-blue-400'>So Much More </span> Than A Binder</h1 >
            <div className="grid gap-x-8 gap-y-8 lg:grid-cols-2 mt-14" >

                <div className="flex p-5" >
                    <div className='pr-5' >
                        <img className='w-14' src={paper} alt="" />
                    </div >
                    <div>
                        <h2 className='text-xl font-bold'>Paperless Organization</h2>
                        <p className='pt-3 text-[16px]' > Convert all your paper binders into an organized display of tabs and sub tabs that is easy for your audience to navigate online.</p >
                    </div >
                </div >

                <div className="flex p-5" >
                    <div className='pr-5' >
                        <img className='w-14' src={coding} alt="" />
                    </div >
                    <div>
                        <h2 className='text-xl font-bold'>One Gateway To Your Online Resources</h2>
                        <p className='pt-3 text-[16px]' > Combine all your URLs and uploaded files into one seamless package to make it easy for your stakeholders to retrieve.</p >
                    </div >
                </div >
                <div className="flex p-5" >
                    <div className='pr-5' >
                        <img className='w-20' src={communicate} alt="" />
                    </div >
                    <div>
                        <h2 className='text-xl font-bold'>Communicate Your Value</h2>
                        <p className='pt-3 text-[16px]' > You’re an indispensable resource to your network of colleagues, clients and students.Make sure they have complete access to readily available content that can be curated with ease.</p >
                    </div >
                </div >
                <div className="flex p-5" >
                    <div className='pr-5' >
                        <img className='w-14' src={context} alt="" />
                    </div >
                    <div>
                        <h2 className='text-xl font-bold'>Context Matters</h2>
                        <p className='pt-3 text-[16px]' > Easily add notes and instructions next to your documents to help guide your audience through your resources.</p >
                    </div >
                </div >
                <div className="flex p-5" >
                    <div className='pr-5' >
                        <img className='w-14' src={tree} alt="" />
                    </div >
                    <div>
                        <h2 className='text-xl font-bold'>Save The Environment</h2>
                        <p className='pt-3 text-[16px]' > The environmental threat of paper is no secret.Digitizing content consolidates information, cuts costs and makes the world healthier for everyone.</p >
                    </div >
                </div >
                <div className="flex p-5" >
                    <div className='pr-5' >
                        <img className='w-14' src={support} alt="" />
                    </div >
                    <div>
                        <h2 className='text-xl font-bold'>Outstanding Support</h2>
                        <p className='pt-3 text-[16px]' > We know how busy you are.You've got better things to do than figure out a new software. We make sure we are available to help answer your questions.</p>
                    </div >
                </div >

            </div >

        </div >
    );
};

export default Benifit;