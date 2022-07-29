import React from 'react';
import image from '../../../asset/pexels-pixabay-301926.jpg'
import AccordianSection from './AccordianSection';

const Allacordian = () => {
    return (
        <div>
            <div className="p-4 mt-28">
                <div className="flex h-screen">
                    <div className='flex-none pl-16 items-center h-80 py-9 pr-4'>
                        <h2 className='mb-10 text-start border-b-4 border-yellow-400 inline-block text-3xl font-bold'>How does it work?</h2>
                        <AccordianSection
                            heading={' The teacher sets up an assignment'}
                            descrip={'You start by setting up your assignment. You pick a feedback rubric from our library or create your own, select an assignment template and youre ready to get started.'}

                        ></AccordianSection>
                        <AccordianSection
                            heading={'  Students submit their work'}
                            descrip={'Students submit their work to your assignment. They can submit anything – text, files, videos, links and even Google docs!'}></AccordianSection>
                        <AccordianSection
                            heading={' Students review each other'}
                            descrip={' Your students give each other anonymous feedback through your rubric.'}></AccordianSection>
                        <AccordianSection
                            heading={' Students engage with their feedback'}
                            descrip={'Students receive feedback from their peers, they react, discuss and engage with their feedback'}></AccordianSection>
                        <AccordianSection
                            heading={' The teacher has a complete overview'}
                            descrip={'You get the complete overview of everything that is happening in the assignment'}></AccordianSection>
                    </div>
                    <div className='bg-amber-400 grow max-h-[500px] w-full relative rounded'>
                        <img src={image} className=" absolute right-0 bottom-[55px] w-4/5 h-96 rounded-lg shadow-2xl" alt='education-pic' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Allacordian;