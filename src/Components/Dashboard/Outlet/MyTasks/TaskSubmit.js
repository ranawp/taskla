import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../../firebase.init';

const TaskSubmit = ({ submit, setRefresh }) => {
    const taskId = submit?._id
    const { taskDeadline, taskMassage, taskName, taskSerial } = submit
    const [user] = useAuthState(auth)
    const email = user?.email
    const date = new Date()
    const currentDate = date.toLocaleDateString();
    const currentHour = date.toLocaleTimeString();


    const handleForm = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const taskName = event.target.taskName.value;
        const taskDescription = event.target.taskDescription.value;
        const deadline = event.target.deadline.value;
        const taskNo = event.target.taskNo.value;
        const taskSubmitedDate = event.target.taskSubmittedDate.value;
        const taskSubmitedHour = event.target.taskSubmitedHour.value;
        // const mark = event.target.mark.value;
        // const scriptfeedback = event.target.scriptfeedback.value;

        // console.log(task)

        fetch(` http://localhost:5000/answer`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                taskDescription,
                taskName,
                deadline,
                taskNo,
                taskSubmitedDate,
                taskSubmitedHour,
                // mark,
                // scriptfeedback
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())

            .then((json) => console.log(json));


        event.target.reset();

        //put method in alltask for submit roll 
        fetch(` http://localhost:5000/alltasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                submit: "submited"
            })

        }).then(res => res.json())
            .then(data => {
                console.log(data)
                setRefresh(data.acknowledged == true)

            })
        event.target.reset()

    }

    return (
        <div>
            <h4 className='text-lg font-bold font-meidum text-center text-dark mb-3 mt-5' > Submit Your Script Here</h4 >
            <form onSubmit={handleForm} className='w-3/4 mx-auto' >
                <div className='hidden'>
                    <span>Email:</span>
                    <input size='20' className='h-5 mb-2 ml-1' name='email' type="text" readOnly value={user?.email} /> <br />

                    <span> Task Name: </span>
                    <input size='20' className='h-5 mb-2 ml-1' name='taskName' type="text" readOnly value={taskName} />
                    <br />
                    <span>Task No.</span>
                    <input name='taskNo' size='20' className='h-5 mb-2 ml-1' type="text" readOnly value={taskSerial} />
                    <br />
                    <span>Deadline</span>
                    <input size='20' className='h-5 mb-2 ml-1' name='deadline' type="text" readOnly value={taskDeadline} />
                    <br />

                    <span>Submisson Date: </span>
                    <input size='20' className='h-5 mb-2 ml-1' name='taskSubmittedDate' type="text" readOnly value={currentDate} />
                    <br />
                    <span>Submisson Time:</span>
                    <input size='20' className='h-5 mb-2 ml-1' name='taskSubmitedHour' type="text" readOnly value={currentHour} />
                    <br />
                </div>

                {/* <span>Massage:</span> */}
                <small className='text-sm'>Submission Time:{currentHour},{currentDate} </small>
                <textarea className='border mt-2 p-2' required placeholder="Give your doc file link here or put answer here" id="" cols="45" rows="5" name='taskDescription'></textarea>

                {/* <textarea required className="mt-2 textarea w-full  h-40 mx-auto" placeholder="Give your doc file link here or put answer here" name='taskDescription'></textarea > */}
                <br />

                <input type="submit" value="Submit" className="bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button cursor-pointer mt-3" />
            </form >
        </div>
    );
};

export default TaskSubmit;