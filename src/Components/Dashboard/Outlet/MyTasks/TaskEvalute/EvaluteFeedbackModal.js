import React from 'react';

const EvaluteFeedbackModal = ({ evaluteFeedbackModal }) => {
    console.log(evaluteFeedbackModal)

    const studentEmail = evaluteFeedbackModal.email
    const handleFeedback = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const taskDescription = e.target.taskDescription.value;
        const taskName = e.target.taskName.value;
        const deadline = e.target.deadline.value;
        const taskNo = e.target.taskNo.value;
        const currentDate = e.target.currentDate.value;
        const currentHour = e.target.currentHour.value;

        const mark = e.target.mark.value;
        const scriptfeedback = e.target.scriptfeedback.value;
        console.log(email, taskDescription, taskName, deadline, taskNo, currentDate, currentHour, mark, scriptfeedback);

        fetch(`http://localhost:5000/feedbackUpdate/${evaluteFeedbackModal?.taskNo}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                mark: mark || evaluteFeedbackModal?.mark,
                scriptfeedback: scriptfeedback || evaluteFeedbackModal?.scriptfeedback,
                email: email || evaluteFeedbackModal?.email,

                taskDescription: taskDescription || evaluteFeedbackModal?.taskDescription,
                taskName: taskName || evaluteFeedbackModal?.taskName,
                deadline: deadline || evaluteFeedbackModal?.deadline,
                taskNo: taskNo || evaluteFeedbackModal?.taskNo,
                currentDate: currentDate || evaluteFeedbackModal?.currentDate,
                currentHour: currentHour || evaluteFeedbackModal?.currentHour,
            })
        })
    }
    return (
        <div>
            <input type="checkbox" id="evalute-feedback-details" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="evalute-feedback-details" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Please Give FeedBack of this task</h3>

                    <form onSubmit={handleFeedback}>
                        <p class="pt-4">Email</p>
                        <input name='email' value={evaluteFeedbackModal.email} placeholder='Please Give Mark'
                            className=" mt-2 p-2 rounded-lg background-color" size="30"
                        ></input>
                        <p class="pt-4">TaskDescription</p>
                        <input value={evaluteFeedbackModal.taskDescription} name='taskDescription' placeholder='Please Give Mark'
                            className=" mt-2 p-2 rounded-lg background-color" size="30"
                        ></input>
                        <p class="pt-4">TaskName</p>
                        <input value={evaluteFeedbackModal.taskName} name='taskName' placeholder='Please Give Mark'
                            className=" mt-2 p-2 rounded-lg background-color" size="30"
                        ></input>
                        <p class="pt-4">Deadline</p>
                        <input value={evaluteFeedbackModal.deadline} name='deadline' placeholder='Please Give Mark'
                            className=" mt-2 p-2 rounded-lg background-color" size="30"
                        ></input>
                        <p class="pt-4">taskNo</p>
                        <input value={evaluteFeedbackModal.taskNo} name='taskNo' placeholder='Please Give Mark'
                            className=" mt-2 p-2 rounded-lg background-color" size="30"
                        ></input>
                        <p class="pt-4">CurrentDate</p>
                        <input value={evaluteFeedbackModal.currentDate} name='currentDate' placeholder='Please Give Mark'
                            className=" mt-2 p-2 rounded-lg background-color" size="30"
                        ></input>
                        <p class="pt-4">currentHour</p>
                        <input value={evaluteFeedbackModal.currentHour} name='currentHour' placeholder='Please Give Mark'
                            className=" mt-2 p-2 rounded-lg background-color" size="30"
                        ></input>



                        <p class="pt-4">Mark</p>
                        <input name='mark' placeholder='Please Give Mark'
                            className=" mt-2 p-2 rounded-lg background-color" size="30"
                        ></input>

                        <p className='mt-4'>FeedBack:</p>
                        <textarea name="scriptfeedback" id="" cols="35" rows="7" placeholder='Please Write FeedBack. How can improve more:'
                            className=" mt-2 p-2 rounded-lg background-color"
                        ></textarea>
                        <br />
                        <input className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white' type="submit" value="Submit" />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default EvaluteFeedbackModal;