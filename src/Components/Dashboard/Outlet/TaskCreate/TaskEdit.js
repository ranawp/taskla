import React, { useEffect, useState } from 'react';
import SignleEditTask from './SignleEditTask';

const TaskEdit = () => {
    const [singleTask, setSingleTask] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/alltaskEdit')
            .then(res => res.json())
            .then(data => setSingleTask(data))
    }, [])
    return (
        <div>
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Serial</th>
                        {/* <th>Task no</th> */}
                        <th>Task name</th>
                        <th>Details</th>
                        <th>Deadline</th>

                        <th>Update</th>
                        <th></th>

                    </tr>
                </thead>

                <tbody>
                    {
                        singleTask.map((taskEvalute, index) => <SignleEditTask
                            key={taskEvalute._id}
                            taskEvalute={taskEvalute}
                            index={index}
                            setSingleTask={setSingleTask}
                        ></SignleEditTask>)
                    }
                </tbody>


            </table>
        </div>
    );
};

export default TaskEdit;