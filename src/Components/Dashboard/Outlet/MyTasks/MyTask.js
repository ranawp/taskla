import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import FeedbackDetails from './FeedbackDetails';
import SingleTasks from './SingleTasks';
import TaskDetails from './TaskDetails';
import TaskModal from './TaskModal';
import './MyTask.css';


const MyTask = () => {
    const [singleTask, setSingleTask] = useState([]);
    const [taskData, setTaskData] = useState([]);
    const [taskSubmit, setTaskSubmit] = useState([]);
    const [toogle, setToogle] = useState(true);
    const [submitOne, setSubmitOne] = useState(false);

    const [user] = useAuthState(auth)
    const email = user?.email;

    // console.log(taskData)
    // console.log(submit)
    // console.log(submitOne)



    useEffect(() => {
        fetch('http://localhost:5000/alltasks')
            .then(res => res.json())
            .then(data => setSingleTask(data))
    }, [])

    // const [marks, setMarks] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/allMarks/${email}`)
    //         .then(res => res.json())
    //         .then(data => setMarks(data))
    // }, [])


    // console.log(taskData)
    // console.log(taskSubmit)


    return (
        <>
            <h1 className='text-2xl text-center mt-10'>Your Assignment</h1>
            <section className="grid grid-cols-2 px-10 mt-5 task-list">

                <div className='w-4/5 border h-80 overflow-y-auto' >
                    {singleTask.map((singleTask) =>
                        <SingleTasks
                            key={singleTask._id}
                            singleTask={singleTask}
                            setTaskData={setTaskData}
                            setTaskSubmit={setTaskSubmit}
                            setToogle={setToogle}
                            setSubmitOne={setSubmitOne}
                            toogle={toogle}

                        ></SingleTasks>
                    )}
                </div>

                <div className="overflow-y-auto border h-80">


                    {toogle &&
                        <div>
                            <>
                                <h1 className="title">Task Name:{taskData.taskName}</h1>
                                <p className="details">Task no:{taskData.taskSerial}</p>
                                <p class="details">Task Posted time:{taskData.questionDeliverDate}</p>
                                <p className="details">Deadline:{taskData.taskDeadline}</p>
                                <p className="details">Task Details : {taskData.taskMassage} </p> </>


                        </div>
                    }
                    <>
                        {!toogle &&
                            <textarea placeholder='submit your answer' name="" id="" cols="30" rows="10"></textarea>
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