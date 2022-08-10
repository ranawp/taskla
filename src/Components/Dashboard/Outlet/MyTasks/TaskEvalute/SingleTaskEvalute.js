import React from 'react';

const SingleTaskEvalute = ({ taskEvalute, index, setEvaluteModalDetails, setEvaluteFeedbackModal }) => {

    const { taskName, taskNo, email, deadline, taskDescription, currentDate, currentHour } = taskEvalute;

    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{taskNo}</td>
                <td>{email}</td>
                <td>{deadline}</td>
                <td>{currentDate}, {currentHour}</td>

                <td><label for="Evalutedetails-modal"
                    onClick={() => setEvaluteModalDetails(taskEvalute)}
                    className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button' >Details </label></td>

                <td><label
                    htmlFor="evalute-feedback-details"
                    onClick={() => setEvaluteFeedbackModal(taskEvalute)}
                    className="bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button">Feedback</label></td>
            </tr>
        </>
    );
};

export default SingleTaskEvalute;