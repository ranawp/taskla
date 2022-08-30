import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LearnDetail from './LearnDetail';


interface Learn {
    id: number
    name: string
    description: string
    img: string
}

const WhatWeLearn = () => {

    let navigate = useNavigate();

    const [learn, setLean] = useState<Learn[]>([])


    useEffect((): void => {
        fetch('learn.json')
            .then(res => res.json())
            .then(data => setLean(data))
    }, [])

    return (
        <div className="hero min-h-screen bg-slate-50">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:mt-[-60px]'>
                    <img className='w-96' src="https://i.ibb.co/hB9qgKk/learn.png" alt="" />
                    <h1 className='text-center text-3xl font-bold text-sky-400 mb-5'>What we can <span className='text-secondary'>learn?</span></h1>
                    <p className='w-96 text-left text-xl text-gray-500'>This course is provide the learning ability for a beginner. This course made for create a web developer. We are start our lesson first HTML. it can start learning beginner to advance. And then we are continue CSS, JS, React JS, Node js and MongoDB.</p>
                </div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                    {
                        learn.map(detail => <LearnDetail
                            key={detail.id}
                            detail={detail}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default WhatWeLearn;