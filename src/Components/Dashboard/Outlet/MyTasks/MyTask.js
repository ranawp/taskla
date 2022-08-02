import React, { useEffect, useState } from 'react';
import SingleTasks from './SingleTasks';

const MyTask = () => {
    const [signleTask, setSingleTask] = useState([]);
    // const [reload, setReload] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/alltasks')
            .then(res => res.json())
            .then(data => setSingleTask(data))
    }, [])

    return (
        <div>
            <h4 className='text-dark font-bold text-2xl'>My Tasks</h4>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Task Name</th>
                            <th>Task no.</th>
                            <th>Task details</th>
                            <th>Result</th>
                            <th>DeadLine</th>
                            <th>Submit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            signleTask.map((singleTask, index) => <SingleTasks

                                key={singleTask._id}
                                task={singleTask}
                                index={index}
                            // reload={reload}
                            // setReload={setReload}
                            ></SingleTasks>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyTask;