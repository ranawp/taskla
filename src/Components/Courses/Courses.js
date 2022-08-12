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

        fetch(`https://cryptic-stream-86241.herokuapp.com/user/enroll/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())

            .then(data => console.log(data))

            .then(data => data)

    }
    return (
        <div className='sm:min-h-screen px-10 flex justify-between relative mt-10'>
            <div className='absolute z-10 top-[40%] right-[50%]'>
            </div>

            <div className="card w-80 h-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/c1gTgV5/website-development.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className='text-2xl font-bold'>Web Development crash course.Build Your carrear with tech.</h1>
                    <p>{text}</p>
                    <div className="card-actions justify-end">
                        <button onClick={enRoll} className="bg-blue-700 border-0 px-3 py-2 button  rounded text-white">Enroll Now</button>
                    </div>
                </div>
            </div>
            {/* <div className="card w-80  h-96 bg-base-100 shadow-xl">
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
            </div> */}
        </div>
    );
};

export default Courses;