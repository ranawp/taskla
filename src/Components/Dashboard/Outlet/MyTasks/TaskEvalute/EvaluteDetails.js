import React from 'react';

const EvaluteDetails = ({ evaluteModalDetails }) => {
    const { taskDescription } = evaluteModalDetails;

    return (
        <>
            <input type="checkbox" id="Evalutedetails-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="Evalutedetails-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className='mb-2'><span className=' font-bold'>Answer Script:</span> {taskDescription}</p>
                </div>
            </div>
        </>
    );
};

export default EvaluteDetails;