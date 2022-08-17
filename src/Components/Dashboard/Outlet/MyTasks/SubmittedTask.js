import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import SingleSubmittedTask from './SingleSubmittedTask';

const SubmittedTask = () => {
    const [user] = useAuthState(auth)
    const email = user?.email;

    const [answerScript, setAnswerScript] = useState([]);
    const [submitedTask, setSubmiitedTask] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/answers/${email}`)
            .then(res => res.json())
            .then(data => setAnswerScript(data))
    }, [])


    useEffect(() => {
        fetch(' http://localhost:5000/alltasks')
            .then(res => res.json())
            .then(data => setSubmiitedTask(data))
    }, [])

    return (
        <>

            <h1 className='text-2xl text-center mt-10'>You already Submmited Assignment</h1>

            <section className="w-50 mx-auto px-10 mt-5 task-list">

                <div className='w-[300px] mb-3 sm:w-4/5 border h-80 overflow-y-auto' >
                    {submitedTask.map(taskDone => <SingleSubmittedTask
                        key={taskDone._id}
                        taskDone={taskDone}
                        answerScript={answerScript}
                    >

                    </SingleSubmittedTask>)}

                </div>


            </section>
        </>
    );
};

export default SubmittedTask;