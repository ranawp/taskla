import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Courses = () => {
    const [text, setText] = useState('')
    const [user] = useAuthState(auth)
    const email = user?.email
    const enRoll = () => {
        setText('we are working.......')
        toast('Wow! you are enrolled')
        fetch(`http://localhost:5000/user/enroll/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => data)
    }
    return (
        <div className='sm:min-h-screen px-10 flex justify-between'>

            <div className="card w-80 h-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <p>{text}</p>
                    <div className="card-actions justify-end">
                        <button onClick={enRoll} className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-80  h-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <p>{text}</p>
                    <div className="card-actions justify-end">
                        <button onClick={enRoll} className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-80 h-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <p>{text}</p>
                    <div className="card-actions justify-end">
                        <button onClick={enRoll} className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;