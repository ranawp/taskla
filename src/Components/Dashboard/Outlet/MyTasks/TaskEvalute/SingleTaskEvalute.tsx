import React from 'react';

const SingleTaskEvalute = ({ taskEvalute, index, setEvaluteModalDetails, setEvaluteFeedbackModal }) => {
    console.log(taskEvalute)

    const { taskName, taskNo, email, deadline, taskDescription, taskSubmitedDate, taskSubmitedHour } = taskEvalute;

    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{taskNo}</td>
                <td>{taskName}</td>

                <td>{email}</td>
                <td>{deadline}</td>
                <td>{taskSubmitedDate}, {taskSubmitedHour}</td>

                <td><label htmlFor="Evalutedetails-modal"
                    onClick={() => setEvaluteModalDetails(taskEvalute)}
                    className=' bg-primary border-0 px-3 py-1 button  rounded text-white modal-button' >Details </label></td>

                <td><label
                    htmlFor="evalute-feedback-details"
                    onClick={() => setEvaluteFeedbackModal(taskEvalute)}
                    className="bg-primary border-0 px-3 py-1 button  rounded text-white modal-button">Feedback</label></td>
            </tr>
        </>
    );
};

export default SingleTaskEvalute;