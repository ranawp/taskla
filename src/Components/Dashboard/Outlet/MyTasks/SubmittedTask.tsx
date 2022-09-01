import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import SingleSubmittedTask from './SingleSubmittedTask';


interface Answer {
    _id: string
    email: string
    taskDescription: string
    taskName: string
    deadline: string
    taskNo: string
    taskSubmitedDate: string
    taskSubmitedHour: string
}


const SubmittedTask = () => {
    const [user] = useAuthState(auth)
    const email = user?.email;

    const [answerScript, setAnswerScript] = useState<Answer[]>([]);
    const [submitedTask, setSubmiitedTask] = useState<Answer[]>([]);

    useEffect(() => {
        fetch(`http://localhost:5000/answers/${email}`)
            .then(res => res.json())
            .then(data => setAnswerScript(data))
    }, [])

    const submitted = submitedTask.filter((task: Answer | any) => {
        return task.submit == "submited"
    })
    // console.log(submitedTask)

    useEffect(() => {
        fetch(' http://localhost:5000/alltasks')
            .then(res => res.json())
            .then(data => setSubmiitedTask(data))
    }, [])

    return (
        <div className='text-black dark:text-slate-50'>

            <h1 className='text-2xl text-center mt-28'>You already Submmited Assignment</h1>

            <section className="w-50 mx-auto px-10 mt-5 task-list">

                <div className='w-[300px] mb-3 sm:w-4/5 border h-80 overflow-y-auto' >
                    {submitted.map((taskDone: Answer) => <SingleSubmittedTask
                        key={taskDone._id}
                        taskDone={taskDone}
                        answerScript={answerScript}
                    >

                    </SingleSubmittedTask>)}

                </div>


            </section>
        </div>
    );
};

export default SubmittedTask;