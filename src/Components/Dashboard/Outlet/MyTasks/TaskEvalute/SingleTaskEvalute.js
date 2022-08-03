import React from 'react';

const SingleTaskEvalute = ({ taskEvalute, index }) => {
    console.log(taskEvalute)
    const { taskName, taskNo, email, deadline, taskDescription } = taskEvalute;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{taskName}</td>
                <td>{taskNo}</td>
                <td>{email}</td>
                <td>{deadline}</td>
                <td></td>
                <td>{taskDescription}</td>
                <td></td>
                <td><label className="bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button">Update</label></td>
            </tr>
        </>
    );
};

export default SingleTaskEvalute;