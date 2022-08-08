import React from 'react';

const MyProfile = () => {
    return (
        <div className='text-center' >
            <h2 className='text-xs mt-3' > provide your Daily Task</h2 >
            <textarea className="textarea textarea-secondary mt-3 w-96 h-72 h ml-2 text-center m-auto" placeholder="provide your task" ></textarea >
        </div >
    );
};

export default MyProfile;