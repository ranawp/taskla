import React, { useState } from 'react';


const Resubmit = ({ fill, feed, toogle }) => {
    const [toggle, setToggle] = useState(null)
    // const [commentText, setCommentText] = useState("")
    console.log(fill)
    const id = fill._id
    const handleSubmit = (event) => {
        event.preventDefault();
        const assignmentAnswer = event.target.assignmentAnswer.value;
        console.log(assignmentAnswer)

        fetch(`http://localhost:5000/resubmit/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                assignmentAnswer: assignmentAnswer
            })
        }).then(res => res.json())
            .then(data => {
                // setRefresh(data.acknowledged == true)
                console.log(data)

            })
        event.target.reset()

        fetch(` http://localhost:5000/answers/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                feedbackSubmit: "recheck"
            })

        }).then(res => res.json())
            .then(data => {
                console.log(data)

            })

    }

    return (
        <div>
            <div className=' min-h-[300px]'>
                {toggle == 'MySubmission' && <p>{fill.assignmentAnswer}</p>}

                {/* {!toggle == 'MyFeedBack' || <>{toogle == false && <p>{fill.assignmentAnswer}</p>}</>} */}


                {toggle == 'MyFeedBack' && <p>{feed?.scriptfeedback}</p>}

                {feed?.scriptfeedback && <>  {toggle == 'Recheck' && <form id="myForm" onSubmit={handleSubmit} >

                    <textarea
                        name="assignmentAnswer"
                        type="text"
                        cols='40'
                        rows='10'
                        required placeholder="Give your resubmit answer here and describe why you want to resubmit"
                    >
                    </textarea> <br />
                    <input type="submit" value="Submit" className="bg-primary border-0 px-3 py-1 button  rounded text-white modal-button cursor-pointer mt-3" />
                </form>}</>}


            </div>

            <div className='flex justify-evenly mt-2'>
                <button onClick={() => setToggle('MySubmission')} className='rounded bg-primary text-white p-1 sm:p-3'>My Submission</button>
                {feed?.scriptfeedback && <> <button onClick={() => setToggle('MyFeedBack')} className='rounded bg-primary text-white px-2 py-1 '>FeedBack</button>
                    <button onClick={() => setToggle('Recheck')} className='rounded bg-primary text-white p-1 sm:p-3'>Recheck</button></>}
            </div>
        </div>
    );
};

export default Resubmit;