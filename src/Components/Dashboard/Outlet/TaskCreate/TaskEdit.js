import React, { useEffect, useState } from 'react';
import ModuleEditModal from './ModuleEditModal';
import SignleEditTask from './SignleEditTask';

const TaskEdit = () => {
    const [singleTask, setSingleTask] = useState([]);
    const [editvideoModal, seteditvideoModal] = useState(null);

    useEffect(() => {
        fetch('https://cryptic-stream-86241.herokuapp.com/alltasks')
            .then(res => res.json())
            .then(data => setSingleTask(data))
    }, [])
    return (
        <div className='mt-20'>
            <h1 className='text-2xl mb-4 text-center font-bold text-primary dark:text-slate-50'>Task <span className='text-secondary'>Edit </span> </h1>
            <table className="table w-80 mx-auto sm:w-full text-slate-50">

                <thead className='mx-auto'>
                    <tr>
                        <th>Milestone Name</th>
                        <th>Edit</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        singleTask.map((taskEvalute, index) => <SignleEditTask
                            key={taskEvalute._id}
                            taskEvalute={taskEvalute}
                            index={index}
                            setSingleTask={setSingleTask}
                            seteditvideoModal={seteditvideoModal}
                        ></SignleEditTask>)
                    }
                </tbody>



            </table>
            {seteditvideoModal && <ModuleEditModal
                singleTask={singleTask}
                editvideoModal={editvideoModal} ></ModuleEditModal>}
        </div>
    );
};

export default TaskEdit;