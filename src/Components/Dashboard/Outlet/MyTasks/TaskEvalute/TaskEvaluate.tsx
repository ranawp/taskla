import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Loading from '../../../../../Share/Loading'
import EvaluteDetails from './EvaluteDetails';
import EvaluteFeedbackModal from './EvaluteFeedbackModal';
import SingleTaskEvalute from './SingleTaskEvalute';
import './taskEvalute.css';

const TaskEvaluate = () => {
    const [taskEvaluate, setTaskEvalute] = useState<Object[] | any>([]);
    const [evaluteModalDetails, setEvaluteModalDetails] = useState<Object | null>(null);
    const [evaluteFeedbackModal, setEvaluteFeedbackModal] = useState<Object | null>(null);
    const [refresh, setRefresh] = useState<Object | null>(null)

    const [loading, isLoading] = useState(false);




    useEffect(() => {
        isLoading(true)

        fetch('https://cryptic-stream-86241.herokuapp.com/answers')

            .then(res => res.json())
            .then(data => {
                setTaskEvalute(data)
                isLoading(false)
            })
    }
        , [refresh])

    const pendingFeedbackTask = taskEvaluate.filter((task): boolean => {
        return task.feedbackSubmit !== "feedbacksubmited"
    })
    return (
        <div>
            <h1 className='font-bold text-2xl my-10 text-center'>Student  <span className='text-secondary'>Evalution tasks</span> </h1>

            <div className='lg:ml-96 md:ml-60 ml-10'>
                <button className=" mb-2"> <NavLink className="px-2 py-1 rounded" to="/dashboard/taskEvaluate">Pending Evalute </NavLink> </button>
                <button className="px-3 py-2 rounded mb-2"> <NavLink className="px-2 py-1 rounded" to="/dashboard/taskEvaluateCompleted">Evalute done</NavLink> </button>
            </div>
            {loading && <Loading />}




            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Task no</th>
                        <th>Task name</th>
                        <th>User Email</th>
                        <th>Deadline</th>
                        <th>Submitted time</th>
                        <th>Answer Script</th>
                        {/* <th>Mark</th> */}
                        <th>Give Feedback</th>
                        <th>Submit Status</th>
                        {/* <th>Upadte</th> */}
                    </tr>
                </thead>

                <tbody>
                    {
                        pendingFeedbackTask.map((taskEvalute, index) => <SingleTaskEvalute
                            key={taskEvalute._id}
                            taskEvalute={taskEvalute}
                            index={index}
                            setEvaluteModalDetails={setEvaluteModalDetails}
                            setEvaluteFeedbackModal={setEvaluteFeedbackModal}

                        ></SingleTaskEvalute>)
                    }
                </tbody>
                {evaluteModalDetails && <EvaluteDetails evaluteModalDetails={evaluteModalDetails} ></EvaluteDetails>}
                {evaluteFeedbackModal && <EvaluteFeedbackModal
                    setRefresh={setRefresh}
                    evaluteFeedbackModal={evaluteFeedbackModal}></EvaluteFeedbackModal>}

            </table>
        </div>
    );
};

export default TaskEvaluate;