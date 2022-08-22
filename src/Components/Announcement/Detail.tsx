import React from 'react';

const Detail = ({ announcement, handleAnnounceDetail }) => {

    const { _id, time, notice } = announcement;

    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
            <div className="card-body" onClick={() => handleAnnounceDetail(_id)}>
                <h2 className="card-title">{notice}</h2>
                <span>{time}</span>
            </div>
        </div>
    );
};

export default Detail;