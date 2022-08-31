import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import FeedbackDetails from './FeedbackDetails';
import SingleTasks from './SingleTasks';
// import TaskDetails from './TaskDetails';
// import TaskModal from './TaskModal';
import './MyTask.css';
import TaskSubmit from './TaskSubmit';
import Loading from '../../../../Share/Loading';
import Resubmit from './Resubmit';

const MyTask = () => {
    const [singleTask, setSingleTask] = useState([]);
    const [taskData, setTaskData] = useState([]);
    const [toogle, setToogle] = useState(true);
    const [submit, setSubmit] = useState([])
    const [refresh, setRefresh] = useState(null)
    const [user] = useAuthState(auth)
    const [watchVideo, setWatchVideo] = useState(false)
    const [watchVideo2, setWatchVideo2] = useState(false)

    const [loading, isLoading] = useState(false)

    const [taskEvaluate, setTaskEvalute] = useState([]);
    const [ans, setAnswer] = useState({})
    const [marks, setMarks] = useState([]);

    const email = user?.email;



    useEffect(() => {
        fetch('http://localhost:5000/answers')
            .then(res => res.json())
            .then(data => setTaskEvalute(data))
    }
        , [])

    //find exact match data from taskEvaluate by submit data
    const fill = taskEvaluate.find((com) => {
        return com.taskNo == submit.MilstoneSerialNo
    })

    useEffect(() => {

        isLoading(true)
        fetch('https://cryptic-stream-86241.herokuapp.com/alltasks')
            .then(res => res.json())
            .then(data => {
                setSingleTask(data)
                isLoading(false)
            })
    }, [refresh])


    useEffect(() => {
        fetch(`http://localhost:5000/allMarks`)
            .then(res => res.json())
            .then(data => setMarks(data))
    }, [])

    //find exact match data from taskEvaluate by submit data
    const feed = marks.find((com) => {
        return com.taskNo == submit.MilstoneSerialNo
    })

    return (
        <>

            <h1 className='text-2xl text-center mt-28 text-primary font-bold'>Your <span className="text-secondary">Modules</span> and <span className='text-secondary'>Assignment</span></h1>
            {loading && <Loading />}

            <section className="grid sm:grid-cols-2 gap-6 px-10 mt-5 task-list">



                <div className=" overflow-y-auto border  pt-3 pl-2 text-base h-80">

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
                        {!fill?.assignmentAnswer ? <>{toogle === false &&
                            <TaskSubmit
                                setRefresh={setRefresh}
                                submit={submit}
                                singleTask={singleTask}
                                setToogle={setToogle}
                            ></TaskSubmit>

                        }</> : <>{toogle === !true &&
                            <Resubmit
                                toogle={toogle}
                                feed={feed}
                                fill={fill}
                            ></Resubmit>
                        }</>}
                    </>


                </div>
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
            </section>
        </>
    );
};

export default MyTask;





