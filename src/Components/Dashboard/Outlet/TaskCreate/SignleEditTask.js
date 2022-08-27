import React from 'react';

const SignleEditTask = ({ taskEvalute, index, seteditvideoModal }) => {
    console.log(taskEvalute)
    const { MilstoneName } = taskEvalute;


    return (
        <>
            <tr>
                {/* <td>{taskNo}</td> */}
                <td>{MilstoneName}</td>

                <td><label htmlFor="module-edit"
                    onClick={() => seteditvideoModal(taskEvalute)}
                    className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button' >Details </label></td>


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