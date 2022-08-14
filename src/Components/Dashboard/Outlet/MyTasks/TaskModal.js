import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import bg1 from '../../../../asset/bg1.jpg';
import auth from '../../../../firebase.init';

const TaskModal = ({ modal }) => {
    // console.log(modal?._id);
    const userId = modal?._id
    const [user] = useAuthState(auth)
    const date = new Date()
    const currentDate = date.toLocaleDateString();
    const currentHour = date.toLocaleTimeString();

    console.log(date)

    // console.log(date)

    // console.log(user.displayName)

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

        fetch(`http://localhost:5000/answer`, {
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
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='bg-no-repeat bg-center h-fit py-10' style={{ backgroundImage: `url(${bg1})` }
                    }>
                        <h4 className='text-2xl font-bold font-meidum text-center text-gray-600 mb-3' > Submit Your Script Here</h4 >
                        <form onSubmit={handleForm} className='w-3/4 mx-auto' >
                            <span>Email:</span>
                            <input size='20' className='h-5 mb-2 ml-1' name='email' type="text" readOnly value={user?.email} /> <br />

                            {/* <span> Mark: </span>
                            <input size='20' className='h-5 mb-2 ml-1' name='mark' type="text" readOnly />
                            <br /> */}

                            {/* <span> scriptfeedback: </span>
                            <input size='20' className='h-5 mb-2 ml-1' name='scriptfeedback' type="text" readOnly />
                            <br /> */}

                            <span> Task Name: </span>
                            <input size='20' className='h-5 mb-2 ml-1' name='taskName' type="text" readOnly value={modal.taskName} />
                            <br />
                            <span>Task No.</span>
                            <input name='taskNo' size='20' className='h-5 mb-2 ml-1' type="text" readOnly value={modal.taskSerial} />
                            <br />
                            <span>Deadline</span>
                            <input size='20' className='h-5 mb-2 ml-1' name='deadline' type="text" readOnly value={modal.taskDeadline} />
                            <br />

                            <span>Submisson Date: </span>
                            <input size='20' className='h-5 mb-2 ml-1' name='taskSubmittedDate' type="text" readOnly value={currentDate} />
                            <br />
                            <span>Submisson Time:</span>
                            <input size='20' className='h-5 mb-2 ml-1' name='taskSubmitedHour' type="text" readOnly value={currentHour} />
                            <br />

                            <span>Massage:</span>
                            <textarea required className="mt-2 textarea w-full  h-60 mx-auto" placeholder="Give your doc file link here or put answer here" name='taskDescription'></textarea >
                            <br />

                            <input type="submit" value="Submit" className='btn btn-primary w-full my-10' />
                        </form >
                    </div >
                </div>
            </div>
        </div>
    );
};

export default TaskModal;