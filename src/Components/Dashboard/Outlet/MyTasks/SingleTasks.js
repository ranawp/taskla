import React from 'react';

const SingleTasks = ({ task, index }) => {
    console.log(task)
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{task.taskName}</td>
            <td>{task.taskSerial}</td>
            <td>{task.taskMassage}</td>
            <td></td>
            <td>{task.taskDeadline}</td>
            <td><input className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white' type="submit" value="Submit" /></td>

        </tr>
    );
};

export default SingleTasks;