import React, { useState } from 'react';
import TaskDetails from './TaskDetails';

const SingleTasks = ({ task, index, setModalDetails }) => {

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

                {/* <td>{task.taskMassage}</td> */}
                <td>Pending</td>
                <td>{task.taskDeadline}</td>
                <td><input className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white' type="submit" value="Submit" /></td>

            </tr>


        </>
    );
};

export default SingleTasks;