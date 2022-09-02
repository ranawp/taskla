import React, { useEffect, useState } from 'react';
import Loading from '../../../../Share/Loading';
import ModuleEditModal from './ModuleEditModal';
import SignleEditTask from './SignleEditTask';

const TaskEdit = () => {
    const [singleTask, setSingleTask] : any = useState<Object[] | any>([]);
    const [editvideoModal, seteditvideoModal] : any = useState<Object | null | any>(null);
    const [loading, isLoading] = useState(false)

    useEffect(() => {
        isLoading(true)
        fetch('https://cryptic-stream-86241.herokuapp.com/alltasks')
            .then(res => res.json())
            .then(data => {
                setSingleTask(data)
                isLoading(false)
            })
    }, [])
    return (
        <div className='mt-20'>
            <h1 className='text-2xl mb-4 text-center font-bold text-primary dark:text-slate-50'>Task <span className='text-secondary'>Edit </span> </h1>
            {loading && <Loading />}
            <table className=" w-80 mx-auto sm:w-full dark:text-slate-50 border dark:border-[#293241]">

                
                    <tr className='text-left bg-gray-200  dark:bg-[#182233] '>
                        <th className='p-3'>Milestone Name</th>
                        <th>Edit</th>
                    </tr>
               

                
                    {
                        singleTask.map((taskEvalute, index) => <SignleEditTask
                            key={taskEvalute._id}
                            taskEvalute={taskEvalute}
                            index={index}
                            setSingleTask={setSingleTask}
                            seteditvideoModal={seteditvideoModal}
                        ></SignleEditTask>)
                    }
                



            </table>
            {seteditvideoModal && <ModuleEditModal
                singleTask={singleTask}
                editvideoModal={editvideoModal} ></ModuleEditModal>}
        </div>
    );
};

export default TaskEdit;