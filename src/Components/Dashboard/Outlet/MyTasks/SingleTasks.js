import React, { useEffect, useState } from 'react';

const SingleTasks = ({ task, index, setModalDetails, setModal, setFeedbackModal, taskFeedback }) => {

    // console.log(taskFeedback.mark)
    // console.log(task)
    //  const { taskMark, setTaskMark } = useState([]);



    // useEffect(() => {
    //     fetch('http://localhost:5000/answers')
    //         .then(res => res.json())
    //         .then(data => setTaskMark(data))
    // })

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


                <td>{task.taskDeadline}</td>


                <td><input className='markinput' size='3' type="text" />{task.mark}</td>
                {/* {taskFeedback.map(taskMark => console.log(taskMark.mark)
                )} */}


                <td><label
                    onClick={() => setFeedbackModal(task)}
                    for="feedback-details"
                    className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button' >See FeedBack </label>
                </td>

                <td><label htmlFor="my-modal-3" className="bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button" onClick={() => setModal(task)}>Submit</label></td>
            </tr>
        </>
    );
};

export default SingleTasks;