import React from 'react';

const Loading = () => {
    return (
        <div className='mt-10'>
            <div className="flex items-center justify-center space-x-2 animate-bounce ">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
                <div className="w-8 h-8 bg-secondary  rounded-full"></div>
                <div className="w-8 h-8 bg-accent rounded-full"></div>
            </div>
        </div>
    );
};

export default Loading;