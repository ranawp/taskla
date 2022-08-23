import React from 'react';

const SignleEditTask = ({ taskEvalute, index }) => {
    // console.log(taskEvalute)
    const { taskName, taskMassage, taskNo, taskDeadline, _id } = taskEvalute;


    return (
        <>
            <tr>
                <th>{index + 1}</th>
                {/* <td>{taskNo}</td> */}
                <td>{taskName}</td>
                <td><button>Details</button></td>
                <td>{taskDeadline}</td>
                <td><button>Edit</button></td>


                {/* <td><label htmlFor="Evalutedetails-modal"
                    onClick={() => setEvaluteModalDetails(taskEvalute)}
                    className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button' >Details </label></td>

                <td><label
                    htmlFor="evalute-feedback-details"
                    onClick={() => setEvaluteFeedbackModal(taskEvalute)}
                    className="bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button">Feedback</label></td> */}
            </tr>
        </>
    );
};

export default SignleEditTask;