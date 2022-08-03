import React, { useEffect, useState } from 'react';
import SingleTaskEvalute from './SingleTaskEvalute';

const TaskEvaluate = () => {
    const [taskEvaluate, setTaskEvalute] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/answers')
            .then(res => res.json())
            .then(data => setTaskEvalute(data))
    }
        , [])
    return (
        <div>
            <h1 className='font-bold text-2xl'>Student Submitted tasks</h1>
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Task Name</th>
                        <th>Task no</th>
                        <th>User Email</th>
                        <th>Deadline</th>
                        <th>Submitted time</th>
                        <th>Task Details</th>
                        <th>Mark</th>
                        <th>Upadte</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        taskEvaluate.map((taskEvalute, index) => <SingleTaskEvalute

                            key={taskEvalute._id}
                            taskEvalute={taskEvalute}
                            index={index}
                        // setModal={setModal}
                        // setModalDetails={setModalDetails}
                        // reload={reload}
                        // setReload={setReload}
                        ></SingleTaskEvalute>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default TaskEvaluate;