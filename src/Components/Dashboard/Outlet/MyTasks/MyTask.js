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



    // const pendingTask = singleTask.filter(task => {
    //     return task.submit !== "submited"
    // })


    useEffect(() => {
        fetch('http://localhost:5000/alltasks')
            .then(res => res.json())
            .then(data => setSingleTask(data))

    }, [refresh])
    const [marks, setMarks] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allMarks/${email}`)
            .then(res => res.json())
            .then(data => setMarks(data))
    }, [])

    // const [marks, setMarks] = useState([]);
    // useEffect(() => {
    //     fetch(` http://localhost:5000/allMarks/${email}`)
    //         .then(res => res.json())
    //         .then(data => setMarks(data))
    // }, [])

    return (
        <div className='text-primary dark:text-slate-50'>
            <h1 className='text-2xl font-bold text-center mt-24 mb-10'>Web Development Crash Course</h1>

            <section className="grid sm:grid-cols-2 gap-6 px-10 mt-22 task-list">


                

                <div className=" overflow-y-auto border  pt-3 pl-2 text-base">

                    {toogle === true &&
                        <>

                            {watchVideo == "00" && <p>{taskData.moduleIntroduction}</p>

                            }

                            {watchVideo == "01" && <img src='https://i.ibb.co/QdfMmLn/Frame-1.jpg?fbclid=IwAR1-qxVd74jcKSKmZ-iYm4lWoJfzQYJI1YjYr49vLNUtBsICMituyFLvSZ4' alt="" />

                            }
                            {watchVideo == "02" && <img src="https://i.ibb.co/C7JK4gp/Frame-2.jpg?fbclid=IwAR0Fz5Jdl3tRw-muYmJgMOPyHwEFXB4B0umv24Qj7bKSoWOKsNYgRvEVffY" alt="" />

                            }
                            {watchVideo == "03" && <img src="https://i.ibb.co/G22DX30/Frame-3.jpg?fbclid=IwAR2pr69mUpHc7OyYQ5BVzTndz206usOLH14AVomIx-GU82riKvqD0eACRu4" alt="" />

                            }
                            {watchVideo == "04" && <img src="https://i.ibb.co/7KrTqDf/Frame-4.jpg?fbclid=IwAR0PYNg8qnKE9e1HeDapUbiqDbVMlyl_V7Kpl47BpwQZ2DC92CprXD6qjXk" alt="" />

                            }
                            {watchVideo == "05" && <img src="https://i.ibb.co/LrTYL60/Frame-6.jpg?fbclid=IwAR2cP88pAUlbLKgLK-eqm7L_V4e04frOkIRJ5z5AksTJL3TwYsQtwHVQYRA" alt="" />

                            }
                            {watchVideo == "06" && <img src="https://i.ibb.co/Rg8Wx59/Frame-8.jpg?fbclid=IwAR12tphfzvEijEH_QVhVZbl3JKIelR9NJHhv3ke0kTtX_CMpjUrI88k3Lsk" alt="" />

                            }

                            {watchVideo == "assignment" && <div>
                                <p>Qusetion Delivery time:{taskData.questionDeliverDate},{taskData.questionDeliverHour}</p>
                                <p>Task deadline:{taskData.taskDeadline} </p>
                                <p>Assignment Name and serial:{taskData.asignmentName}</p>
                                {taskData.assignmentInstruction}</div>

                            }

                        </>
                    }
                    <>
                        {toogle === false &&
                            <TaskSubmit
                                setRefresh={setRefresh}
                                submit={submit}
                                singleTask={singleTask}
                                setToogle={setToogle}
                            ></TaskSubmit>

                        }
                    </>

                </div>
                <div className='w-[300px] mb-3 sm:w-4/5 border h-[383px] overflow-auto' >
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
            </section>
        </div>
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