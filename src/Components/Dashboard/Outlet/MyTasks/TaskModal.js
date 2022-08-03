import React from 'react';
import bg1 from '../../../../asset/bg1.jpg';

const TaskModal = ({ modal }) => {
    // console.log(modal);

    const handleForm = event => {
        event.preventDefault();
        const task = event.target.text.value;
        // console.log(task)

        fetch(`http://localhost:5000/answer`, {
            method: 'POST',
            body: JSON.stringify({ task }),
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
                        <h4 className='text-2xl font-bold font-meidum text-center mt-10 text-gray-600' > Submit Your {modal.taskName} Script Here</h4 >
                        <form onSubmit={handleForm} className='w-3/4 mx-auto mt-10' >
                            <textarea className="textarea w-full  h-60 mx-auto" placeholder="Write Your Answer" name='text'></textarea >
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