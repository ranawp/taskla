import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import FeedbackDetails from './FeedbackDetails';
import SingleTasks from './SingleTasks';
// import TaskDetails from './TaskDetails';
// import TaskModal from './TaskModal';
import './MyTask.css';
import TaskSubmit from './TaskSubmit';

// interface Task {
//     _id: string
//     questionDeliverDate: string
//     questionDeliverHour: string
//     taskName: string
//     taskSerial: string
//     taskDeadline: string
//     taskMassage: string
//     submit?: string
// }

// interface Mark {
//     _id: string
//     mark: string
//     scriptfeedback: string
//     email: string
//     taskDescription: string
//     taskName: string
//     deadline: string
//     taskNo: string
//     feedbackDate: string
//     feedbackHour: string
// }

const MyTask = () => {
    const [singleTask, setSingleTask] = useState([]);
    const [taskData, setTaskData] = useState([]);
    const [toogle, setToogle] = useState(true);
    const [submit, setSubmit] = useState([])
    const [refresh, setRefresh] = useState(null)
    const [user] = useAuthState(auth)
    const [watchVideo, setWatchVideo] = useState(false)
    const [watchVideo2, setWatchVideo2] = useState(false)

    const email = user?.email;

    // console.log(submit)
    console.log(taskData)

    // const pendingTask = singleTask.filter(task => {
    //     return task.submit !== "submited"
    // })


    console.log(singleTask.reverse())
    useEffect(() => {
        fetch('http://localhost:5000/alltasks')
            .then(res => res.json())
            .then(data => setSingleTask(data))

    }, [refresh])



    return (
        <>

            <h1 className='text-2xl text-center mt-10'>Your Assignment</h1>

            <section className="grid sm:grid-cols-2 px-10 mt-5 task-list">

                <div className='w-[300px] mb-3 sm:w-4/5 border h-80 overflow-y-auto' >
                    {singleTask.map((singleTask) =>
                        <SingleTasks
                            key={singleTask._id}
                            singleTask={singleTask}
                            setTaskData={setTaskData}
                            setToogle={setToogle}
                            setSubmit={setSubmit}
                            setWatchVideo={setWatchVideo}
                            setWatchVideo2={setWatchVideo2}
                        ></SingleTasks>
                    )}
                </div>

                <div className=" overflow-y-auto border  pt-3 pl-2 text-base">

                    {toogle === true &&
                        <>
                            {/* <h1 className="title">Task Name:{taskData.taskName}</h1>
                            <p className="details">Task no:{taskData.taskSerial}</p>
                            <p classNeme="details">Task Posted time:{taskData.questionDeliverDate}</p>
                            <p className="details">Task Posted time:{taskData.questionDeliverDate}</p>
                            <p className="details">Deadline:{taskData.taskDeadline}</p>
                            <p className="details">Task Details : {taskData.taskMassage} </p> */}
                            {watchVideo == "00" && <p>{taskData.moduleIntroduction}</p>

                            }

                            {watchVideo == "01" && <iframe className=""
                                src={taskData.Modulevideo1}
                                frameborder="0"
                                allow="autoplay; encrypted-media"
                                allowfullscreen
                                title="video"
                            />

                            }
                            {watchVideo == "02" && <p>video 2 {taskData.Modulevideo2}</p>

                            }
                            {watchVideo == "03" && <p>video 3</p>

                            }
                            {watchVideo == "04" && <p>video 4</p>

                            }
                            {watchVideo == "05" && <p>video 5</p>

                            }
                            {watchVideo == "06" && <p>video 6</p>

                            }

                            {watchVideo == "assignment" && <div>
                                <p>Qusetion Delivery time:{taskData.questionDeliverDate},{taskData.questionDeliverHour}</p>
                                <p>Task deadline:{taskData.taskDeadline} </p>
                                <p>Assignment Name and serial:{taskData.asignmentName}</p>



                                {taskData.assignmentInstruction}</div>

                            }



                            {/* <p className="details"> <img src={taskData.img} alt="" /> */}


                        </>
                    }
                    <>
                        {toogle === false &&
                            <TaskSubmit
                                setRefresh={setRefresh}
                                submit={submit} singleTask={singleTask}></TaskSubmit>

                        }
                    </>

                </div>
            </section>
        </>
    );
};

export default MyTask;









// /////////////////////
// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../../../firebase.init';
// import FeedbackDetails from './FeedbackDetails';
// import SingleTasks from './SingleTasks';
// import TaskDetails from './TaskDetails';
// import TaskModal from './TaskModal';

// const MyTask = () => {
//     const [singleTask, setSingleTask] = useState([]);
//     const [singleTasks, setSingleTasks] = useState([]);
//     const [taskFeedback, setTaskFeedback] = useState([]);
//     const [modal, setModal] = useState({});
//     const [modalDetails, setModalDetails] = useState(null);
//     const [feedbackModal, setFeedbackModal] = useState(null)
//     // const [reload, setReload] = useState(false);
//     const [user] = useAuthState(auth)
//     const email = user?.email;

//     useEffect(() => {
//         fetch('http://localhost:5000/alltasks')
//             .then(res => res.json())
//             .then(data => setSingleTask(data))
//     }, [])

//     const [marks, setMarks] = useState([]);
//     useEffect(() => {
//         fetch(`http://localhost:5000/allMarks/${email}`)
//             .then(res => res.json())
//             .then(data => setMarks(data))
//     }, [])



//     return (
//         <div>
//             <h4 className='text-dark font-bold text-2xl'>My Tasks</h4>
//             <div className="overflow-x-auto">
//                 <table className="table w-full">

//                     <thead>
//                         <tr>
//                             <th>Serial</th>
//                             <th>Task Name</th>
//                             <th>Task no.</th>
//                             <th>Task details</th>
//                             <th>Task Created Time</th>

//                             <th>DeadLine</th>
//                             {/* <th>Result</th> */}
//                             {/* <th>Feedback</th>  */}
//                             <th>Submit</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {
//                             singleTask.map((singleTask, index) => <SingleTasks

//                                 key={singleTask._id}
//                                 task={singleTask}
//                                 index={index}
//                                 setModal={setModal}
//                                 setModalDetails={setModalDetails}
//                                 setFeedbackModal={setFeedbackModal}
//                                 taskFeedback={taskFeedback}
//                                 setMarks={setMarks}
//                                 marks={marks}


//                             // reload={reload}
//                             // setReload={setReload}
//                             ></SingleTasks>)
//                         }
//                     </tbody>
//                     {modalDetails && <TaskDetails modalDetails={modalDetails} ></TaskDetails>}
//                     {feedbackModal && <FeedbackDetails task={singleTask} feedbackModal={feedbackModal}></FeedbackDetails>}

//                 </table>
//             </div>
//             {modal && <TaskModal modal={modal} />}

//         </div>
//     );
// };

// export default MyTask;