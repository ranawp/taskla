import React from 'react';

const TaskCreate = () => {
    return (
        <div>
            <h2 className='text-xl mt-3'>provide students Daily Task</h2>
            <textarea className="textarea textarea-primary mt-3 w-96 h-72 h ml-2  m-auto" placeholder="provide your task"></textarea>
        </div>
    );
};

export default TaskCreate;