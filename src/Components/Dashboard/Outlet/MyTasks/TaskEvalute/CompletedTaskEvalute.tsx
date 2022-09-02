import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Loading from '../../../../../Share/Loading';
import DoneSignleEvaluate from './DoneSignleEvaluate';
import EvaluteDetails from './EvaluteDetails';

const CompletedTaskEvalute = () => {

    const [taskEvaluate, setTaskEvalute] = useState<Object[]>([]);
    const [evaluteModalDetails, setEvaluteModalDetails] = useState<object | any>(null);
    const [loading, isLoading] = useState(false)

    useEffect(() => {
        isLoading(true)
        fetch('https://cryptic-stream-86241.herokuapp.com/answers')
            .then(res => res.json())
            .then(data => {
                setTaskEvalute(data)
                isLoading(false)
            })
    }
        , [])

    const doneFeedbackTask: Object[] = taskEvaluate.filter((task: Object | any) => {
        return task.feedbackSubmit == "feedbacksubmited"
    })

    return (
        <div className=''>
            <h1 className='font-bold text-2xl my-10 text-center dark:text-slate-200'>Student  <span className='text-secondary'>Evalution tasks</span> </h1>

            <div className='lg:ml-96 md:ml-60 ml-10'>
                <button className=" mb-2"> <NavLink className="px-2 py-1 rounded" to="/dashboard/taskEvaluate">Pending Evalute </NavLink> </button>
                <button className="px-3 py-2 rounded mb-2"> <NavLink className="px-2 py-1 rounded" to="/dashboard/taskEvaluateCompleted">Evalute done</NavLink> </button>
            </div>
            {loading && <Loading />}
            <table className="w-full text-left border dark:border-[#293241] dark:text-slate-50">
                <thead className='bg-gray-200 dark:bg-[#182233]'>
                    <tr>
                        <th className='p-3'>Serial</th>
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


{/* <div>
            <h1 className='text-center text-2xl font-bold my-10 dark:text-slate-50'> Evaluted <span className='text-secondary'>done task</span> </h1>
            <table className="w-full text-left border dark:border-[#293241] dark:text-slate-50">
                <thead className='bg-gray-200 dark:bg-[#182233]'></thead> */}