import React from 'react';

const DoneSignleEvaluate = ({ taskEvalute, index }) => {

    const { taskName, taskNo, email, deadline, taskDescription, taskSubmitedDate, taskSubmitedHour } = taskEvalute;

    return (
        <>
            <tr className='border dark:border-[#293241]'>
                <th className='p-3'>{index + 1}</th>
                <td>{taskNo}</td>
                <td>{taskName}</td>

                <td>{email}</td>
                <td>{deadline}</td>
                {/* <td>{taskSubmitedDate}, {taskSubmitedHour}</td> */}

                <td><label htmlFor="Evalutedetails-modal"
                    // onClick={() => setEvaluteModalDetails(taskEvalute)}
                    className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button' >Details </label></td>


            </tr>
        </>
    );
};

export default DoneSignleEvaluate;