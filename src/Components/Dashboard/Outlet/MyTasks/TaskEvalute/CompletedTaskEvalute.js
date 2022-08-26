import React, { useEffect, useState } from 'react';
import DoneSignleEvaluate from './DoneSignleEvaluate';

const CompletedTaskEvalute = () => {

    const [taskEvaluate, setTaskEvalute] = useState([]);
    const [evaluteModalDetails, setEvaluteModalDetails] = useState(null);

    useEffect(() => {
        fetch(' http://localhost:5000/answers')
            .then(res => res.json())
            .then(data => setTaskEvalute(data))
    }
        , [])

    const doneFeedbackTask = taskEvaluate.filter(task => {
        return task.feedbackSubmit == "feedbacksubmited"
    })

    return (
        <div>
            <h1 className='text-center text-2xl dark:text-slate-50'> Evaluted done task</h1>
            <table className="table w-full text-slate-50">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Task no</th>
                        <th>Task name</th>
                        <th>User Email</th>
                        <th>Deadline</th>
                        {/* <th>Submitted time</th> */}
                        <th>Answer Script</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        doneFeedbackTask.map((taskEvalute, index) => <DoneSignleEvaluate
                            key={taskEvalute._id}
                            taskEvalute={taskEvalute}
                            index={index}
                            setEvaluteModalDetails={setEvaluteModalDetails}


                        ></DoneSignleEvaluate>)
                    }
                </tbody>
                {evaluteModalDetails && <EvaluteDetails evaluteModalDetails={evaluteModalDetails} ></EvaluteDetails>}
            </table>
        </div>
    );
};

export default CompletedTaskEvalute;