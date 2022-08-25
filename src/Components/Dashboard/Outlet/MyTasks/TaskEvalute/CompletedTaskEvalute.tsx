import React, { useEffect, useState } from 'react';
import DoneSignleEvaluate from './DoneSignleEvaluate';
import EvaluteDetails from './EvaluteDetails';

const CompletedTaskEvalute = () => {

    const [taskEvaluate, setTaskEvalute] = useState<Object[]>([]);
    const [evaluteModalDetails, setEvaluteModalDetails] = useState<object | any>(null);

    useEffect(() => {
        fetch('https://cryptic-stream-86241.herokuapp.com/answers')
            .then(res => res.json())
            .then(data => setTaskEvalute(data))
    }
        , [])

    const doneFeedbackTask : Object[] = taskEvaluate.filter((task : Object | any) => {
        return task.feedbackSubmit == "feedbacksubmited"
    })

    return (
        <div>
            <h1 className='text-center text-2xl'> Evaluted done task</h1>
            <table className="table w-full">
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
                        doneFeedbackTask.map((taskEvalute: object | any, index) => <DoneSignleEvaluate
                            key={taskEvalute._id}
                            taskEvalute={taskEvalute}
                            index={index}
                            // setEvaluteModalDetails={setEvaluteModalDetails}


                        ></DoneSignleEvaluate>)
                    }
                </tbody>
                {evaluteModalDetails && <EvaluteDetails evaluteModalDetails={evaluteModalDetails} ></EvaluteDetails>}
            </table>
        </div>
    );
};

export default CompletedTaskEvalute;