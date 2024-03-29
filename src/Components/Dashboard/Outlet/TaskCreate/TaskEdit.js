import React, { useEffect, useState } from 'react';
import ModuleEditModal from './ModuleEditModal';
import SignleEditTask from './SignleEditTask';

const TaskEdit = () => {
    const [singleTask, setSingleTask] = useState([]);
    const [editvideoModal, seteditvideoModal] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/alltasks')
            .then(res => res.json())
            .then(data => setSingleTask(data))
    }, [])
    return (
        <div>
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Milestone Name</th>
                        {/* <th>Task no</th> */}



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