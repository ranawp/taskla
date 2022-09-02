import React from 'react';

const LearnDetail = ({ detail }) => {
    return (
        <div className="card w-60 h-68 dark:bg-[#182233] bg-white shadow-lg">
            <figure className="px-10 pt-10">
                <div className="avatar">
                    <div className="w-14 rounded-full">
                        <img src={detail.img} />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-primary dark:text-slate-200">{detail.name}</h2>
                <p className='text-gray-500 dark:text-slate-200'>{detail.description}</p>
            </div>
        </div>
    );
};

export default LearnDetail;