import React from 'react';
import image from '../../../asset/know.png'
import AccordianSection from './AccordianSection';

const Allacordian = () => {
    return (
        <div className='mt-[70px] lg:h-[500px] border-y-[1px] p-5 relative'>
            <div className='w-full h-4 opacity-20 -rotate-[12px] bac blur bg-red-200 absolute top-[50%]' ></div>
            <div className='w-full h-5 opacity-20 -rotate-[20px] blur bg-green-300 absolute top-[52%]' ></div>
            <div className='w-full h-5 opacity-20 blur bg-blue-300 absolute top-[54%]' ></div>
            <div className='container mx-auto px-10'>
                <div className='flex h-full flex-col gap-10 lg:flex-row lg:gap-28'>
                    <div className='flex h-full w-full flex-col justify-center'>
                        <img className='w-[200px]' src={image} alt="" />
                        <h2 className='text-[40px] text-bold leading-10 text-primary'>Common Question<br /><span className='text-secondary'> And It's Answer</span> </h2>
                        <p className='text-[18px] text-primary leading-6 mt-8'>We have listed here the answers to some of your common questions. We request you to read this list once before asking questions. Then you don't have to wait for our reply and save your precious time.</p>
                    </div>
                    <div className='w-full'>

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
                    </div >
                </div>
            </div>

        </div >
    );
};

export default Allacordian;
