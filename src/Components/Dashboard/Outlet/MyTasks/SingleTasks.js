import React, { useEffect, useState } from 'react';

const SingleTasks = ({ task, index, setModalDetails, setModal, setFeedbackModal, taskFeedback, singleMark, marks, setMarks }) => {




    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{task?.taskName}</td>
                <td>{task?.taskSerial}</td>
                <td><label for="details-modal"
                    onClick={() => setModalDetails(task)}
                    className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button' >Details </label></td>


                <td>{task.questionDeliverDate},{task.questionDeliverHour}</td>
                <td>{task.taskDeadline}</td>


                {/* <td><input className='markinput' size='3' type="text" />{singleMark.mark}</td> */}

                {/* {taskFeedback.map(taskMark => console.log(taskMark.mark)
                )} */}


                {/* <td><label
                    onClick={() => setFeedbackModal(task)}
                    for="feedback-details"
                    className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button' >See FeedBack </label>
                </td> */}

                <td><label htmlFor="my-modal-3" className="bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button" onClick={() => setModal(task)}>Submit</label></td>
            </tr>
        </>
    );
};

export default SingleTasks;