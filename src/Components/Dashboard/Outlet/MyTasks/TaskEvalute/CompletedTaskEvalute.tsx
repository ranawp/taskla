import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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

    const doneFeedbackTask: Object[] = taskEvaluate.filter((task: Object | any) => {
        return task.feedbackSubmit == "feedbacksubmited"
    })

    return (
        <div>
            <h1 className='text-center text-2xl my-10'> Evaluted <span className='text-secondary'>done task</span> </h1>
            <div className='lg:ml-96 md:ml-60 ml-10'>
                <button className=" mb-2"> <NavLink className="px-2 py-1 rounded" to="/dashboard/taskEvaluate">Pending Evalute </NavLink> </button>
                <button className="px-3 py-2 rounded mb-2"> <NavLink className="px-2 py-1 rounded" to="/dashboard/taskEvaluateCompleted">Evalute done</NavLink> </button>
            </div>
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