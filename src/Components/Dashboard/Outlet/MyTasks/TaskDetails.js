import React from 'react';

const TaskDetails = ({ modalDetails }) => {
    // console.log(modalDetails)
    const { taskName, taskMassage, taskDeadline } = modalDetails
    return (
        <>
            <input type="checkbox" id="details-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <p className='mb-2'><span className=' font-bold'>Task Deadline :{taskDeadline}</span></p>
                    <label for="details-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p><span className='font-bold'>Task Name:{taskName}</span></p>
                    <p className='my-2'><span className='font-bold'>Task description:{taskMassage}</span> </p>
                </div>
            </div>
        </>
    );
};

export default TaskDetails;