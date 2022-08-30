import React from 'react';

const LearnDetail = ({ detail }) => {
    return (
        <div className="card w-60 bg-base-100 shadow-sm">
            <figure className="px-10 pt-10">
                <div className="avatar">
                    <div className="w-14 rounded-full">
                        <img src={detail.img} />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{detail.name}</h2>
                <p>{detail.description}</p>
            </div>
        </div>
    );
};

export default LearnDetail;