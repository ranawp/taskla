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
    

    useEffect(() : void => {
        fetch('learn.json')
            .then(res => res.json())
            .then(data => setLean(data))
    }, [])

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card w-80 h-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/c1gTgV5/website-development.jpg" alt="Shoes" /></figure>
                    <div className="card-body relative">
                        <h1 className='text-2xl font-bold'>Web Development crash course.Build Your carrear with tech. <span className='ml-[100px]'>$ 100</span></h1>
                        <div className="card-actions justify-end">
                            <button onClick={() => navigate("/courses/payment")} className="btn-secondary border-0 px-3 py-2 button  rounded text-white">Enroll Now</button>
                        </div>
                    </div>
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