import React, { useState } from 'react';
// import TaskDetails from './TaskDetails';

const SingleTasks = ({ task, index, setModalDetails, setModal }) => {

    // console.log(task)
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{task.taskName}</td>
                <td>{task.taskSerial}</td>
                {/* <td><input className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white' type="submit" value="Details" /></td> */}


                <td><label for="details-modal"
                    onClick={() => setModalDetails(task)}
                    className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button' >Details </label></td>

                <td>Pending</td>
                <td>{task.taskDeadline}</td>
                <td><label htmlFor="my-modal-3" className="bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button" onClick={() => setModal(task)}>Submit</label></td>
            </tr>
        </>
    );
};

export default SingleTasks;