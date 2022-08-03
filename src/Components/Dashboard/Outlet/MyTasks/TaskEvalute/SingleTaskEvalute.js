import React from 'react';

const SingleTaskEvalute = ({ taskEvalute, index, setEvaluteModalDetails }) => {

    const { taskName, taskNo, email, deadline, taskDescription, currentDate, currentHour } = taskEvalute;

    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{taskName}</td>
                <td>{taskNo}</td>
                <td>{email}</td>
                <td>{deadline}</td>
                <td>{currentDate}, {currentHour}</td>

                <td><label for="Evalutedetails-modal"
                    onClick={() => setEvaluteModalDetails(taskEvalute)}
                    className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button' >Details </label></td>

                {/* <td>{taskDescription}</td> */}
                <td><input className='markinput' size='3' type="text" /></td>
                <td><label className="bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button">Update</label></td>
            </tr>
        </>
    );
};

export default SingleTaskEvalute;