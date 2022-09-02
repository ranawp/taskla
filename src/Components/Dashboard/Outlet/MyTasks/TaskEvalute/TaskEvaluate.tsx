import React, { useEffect, useState } from 'react';
import EvaluteDetails from './EvaluteDetails';
import EvaluteFeedbackModal from './EvaluteFeedbackModal';
import SingleTaskEvalute from './SingleTaskEvalute';
import './taskEvalute.css';

const TaskEvaluate = () => {
    const [taskEvaluate, setTaskEvalute] = useState<Object[] | any>([]);
    const [evaluteModalDetails, setEvaluteModalDetails] = useState<Object | null>(null);
    const [evaluteFeedbackModal, setEvaluteFeedbackModal] = useState<Object | null>(null);
    const [refresh, setRefresh] = useState<Object | null>(null)
    const [loading, isLoading] = useState(false)


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
            {loading == true && <p>loading</p>}
            <h1 className='font-bold text-2xl my-10 text-center text-primary dark:text-slate-50'>Student  <span className='text-secondary'>Submitted tasks</span> </h1>
            <table className="w-full text-left text-primary dark:text-slate-50 border dark:border-[#293241] dark:bg-transparent">
                <tr className='bg-gray-200  dark:bg-[#182233]'>
                    <th className='p-3'>Serial</th>
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
                {
                    pendingFeedbackTask.map((taskEvalute, index) => <SingleTaskEvalute
                        key={taskEvalute._id}
                        taskEvalute={taskEvalute}
                        index={index}
                        setEvaluteModalDetails={setEvaluteModalDetails}
                        setEvaluteFeedbackModal={setEvaluteFeedbackModal}

                    ></SingleTaskEvalute>)
                }

                {evaluteModalDetails && <EvaluteDetails evaluteModalDetails={evaluteModalDetails} ></EvaluteDetails>}
                {evaluteFeedbackModal && <EvaluteFeedbackModal
                    setRefresh={setRefresh}
                    evaluteFeedbackModal={evaluteFeedbackModal}></EvaluteFeedbackModal>}

            </table>
        </div>
    );
};

export default TaskEvaluate;