import React from 'react';
import image from '../../asset/pexels-pixabay-301926.jpg'

const AccordianSection = () => {
    return (
        <div>

            <div className="p-4 mt-28">
                <div className="flex h-screen">
                    <div className='flex-none pl-16 items-center h-80 py-9 w-[450px] pr-4'>
                        <h2 className='mb-10 text-start border-b-4 border-yellow-400 inline-block text-3xl font-bold'>How does it work?</h2>
                        <div tabindex="0" className="collapse border-base-300 bg-base-100 hover:border rounded hover:drop-shadow-xl mb-1">
                            <div className="collapse-title text-xl font-medium text-slate-400  hover:text-black ">
                                The teacher sets up an assignment
                            </div>
                            <div className="collapse-content w-96">
                                <p>You start by setting up your assignment. You pick a feedback rubric from our library or create your own, select an assignment template and you're ready to get started.</p>
                            </div>
                        </div>

                        <div tabindex="0" className="collapse border-base-300 bg-base-100 hover:border rounded hover:drop-shadow-xl mb-1">
                            <div className="collapse-title text-xl font-medium text-slate-400  hover:text-black ">
                                Students submit their work

                            </div>
                            <div className="collapse-content">
                                <p> Students submit their work to your assignment. They can submit anything – text, files, videos, links and even Google docs!</p>
                            </div>
                        </div>

                        <div tabindex="0" className="collapse border-base-300 bg-base-100 hover:border rounded hover:drop-shadow-xl mb-1">
                            <div className="collapse-title text-xl font-medium text-slate-400  hover:text-black ">
                                Students review each other

                            </div>
                            <div className="collapse-content">
                                <p> Your students give each other anonymous feedback through your rubric.</p>
                            </div>
                        </div>

                        <div tabindex="0" className="collapse border-base-300 bg-base-100 hover:border rounded hover:drop-shadow-xl mb-1">
                            <div className="collapse-title text-xl font-medium text-slate-400  hover:text-black ">
                                Students engage with their feedback

                            </div>
                            <div className="collapse-content">
                                <p> Students receive feedback from their peers, they react, discuss and engage with their feedback.</p>
                            </div>
                        </div>

                        <div tabindex="0" className="collapse border-base-300 bg-base-100 hover:border rounded hover:drop-shadow-xl">
                            <div className="collapse-title text-xl font-medium text-slate-400  hover:text-black ">
                                The teacher has a complete overview

                            </div>
                            <div className="collapse-content">
                                <p> You get the complete overview of everything that is happening in the assignment.</p>
                            </div>
                        </div>

                    </div>
                    <div className='bg-amber-400 grow h-[500px] w-full relative rounded'>
                        <img src={image} className=" absolute right-0 bottom-[55px] w-4/5 h-96 rounded-lg shadow-2xl" alt='education-pic' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordianSection;