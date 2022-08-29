import React from 'react';

const EvaluteDetails = ({ evaluteModalDetails }) => {
    const { taskDescription, assignmentAnswer } = evaluteModalDetails;
    // console.log(taskDescription)

    return (
        <div>

            <input type="checkbox" id="Evalutedetails-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box dark:bg-[#182233]">

                    <label htmlFor="Evalutedetails-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p><span className='font-bold'>Answer Script : {assignmentAnswer}</span></p>

                </div>
            </div>
        </div>
    );
};

export default EvaluteDetails;