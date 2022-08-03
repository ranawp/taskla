import React, { useEffect, useState } from 'react';
import SingleTasks from './SingleTasks';
import TaskModal from './TaskModal';

const MyTask = () => {
    const [singleTask, setSingleTask] = useState([]);
    const [modal, setModal] = useState({})

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
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                            singleTask.map((singleTask, index) => <SingleTasks
                            signleTask.map((singleTask, index) => <SingleTasks

                                key={singleTask._id}
                                task={singleTask}
                                index={index}

                                setModal={setModal}


                            // reload={reload}
                            // setReload={setReload}
                            ></SingleTasks>)
                        }
                    </tbody>
                </table>
            </div>

            {modal && <TaskModal modal={modal}/>}




        </div>
    );
};

export default MyTask;