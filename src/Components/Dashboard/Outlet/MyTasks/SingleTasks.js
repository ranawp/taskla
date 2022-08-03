import React from 'react';

const SingleTasks = ({ task, index, setModal}) => {
    // console.log(task)
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{task.taskName}</td>
            <td>{task.taskSerial}</td>
            <td>{task.taskMassage}</td>
            <td></td>
            <td>{task.taskDeadline}</td>
            <td><label htmlFor="my-modal-3" className="btn modal-button bg-blue-700 border-0 px-3 py-1 button  rounded text-white"  onClick={() => setModal(task)}>Submit</label></td>
        </tr >
    );
};

export default SingleTasks;