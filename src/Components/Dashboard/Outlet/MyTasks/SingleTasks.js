import React from 'react';
import './MyTask.css';

const SingleTasks = ({ singleTask, setTaskData, setToogle }) => {

    const handleClick = task => {
        setTaskData(task);
    }

    // const handleSubmit = submit => {
    //     setSubmit(submit)
    // }


    return (
        <>
            <div>
                <div className='py-2 '>

                    <div

                        tabindex="0" class="collapse group collapse-arrow border border-base-300 bg-base-100 rounded-box">

                        <div onClick={(e) => setToogle(true)}>
                            <div
                                onClick={() => {
                                    handleClick(singleTask)
                                }}
                                class="collapse-title  font-medium flex justify-between">
                                <div

                                >
                                    {singleTask.taskSerial}  -  {singleTask.taskName}
                                </div>
                                <div>
                                    Due {singleTask.taskDeadline}
                                </div>

                            </div>
                        </div>


                        <div class="collapse-content">
                            <label
                                onClick={(e) => setToogle(false)}
                                className="bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button cursor-pointer">Submit</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTasks;




// //////////////////

// import React from 'react';

// const SingleTasks = ({ task, index, setModalDetails, setModal, setFeedbackModal, taskFeedback, singleMark, marks, setMarks }) => {
//     return (
//         <>
//             <tr>
//                 <th>{index + 1}</th>
//                 <td>{task?.taskName}</td>
//                 <td>{task?.taskSerial}</td>
//                 <td><label for="details-modal"
//                     onClick={() => setModalDetails(task)}
//                     className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button' >Details </label></td>
//                 <td>{task.questionDeliverDate},{task.questionDeliverHour}</td>
//                 <td>{task.taskDeadline}</td>

//                 <td><label htmlFor="my-modal-3" className="bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button" onClick={() => setModal(task)}>Submit</label></td>
//             </tr>
//         </>
//     );
// };

// export default SingleTasks;