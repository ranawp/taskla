import React from 'react';

const EvaluteDetails = ({ evaluteModalDetails }) => {
    const { taskDescription } = evaluteModalDetails;

    return (
        <>
            <input type="checkbox" id="Evalutedetails-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <label for="Evalutedetails-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <input type="checkbox" id="Evalutedetails-modal" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <label for="Evalutedetails-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <p className='mb-2'><span className=' font-bold'>Answer Script:</span> {taskDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EvaluteDetails;