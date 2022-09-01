import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {

    const [rating, setRating] = useState<number>(0);
    const [data, getData] = useState<object[] | any>([]);
    const [user] = useAuthState(auth);

    const email: string | null | undefined = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then((res) => res.json())
            .then((data) => getData(data));

    }, [email])


    const ratingChanged = (newRating: number): void => {    
        setRating(newRating);
    };




    const handleAddReview = (event: any): void => {
        event.preventDefault();
        const name = event.target.name.value;
        const course = event.target.course.value;
        const message = event.target.message.value;
        const image = data.image || 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png';
        const review = { name, course, message, rating, image }
        
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("Successfully Feedback Added!!")
                }
            })
        event.target.reset();
    }

    return (
        <div>
            <div className="hero h-[700px] bg-base-200 mt-[80px]" style={{ backgroundImage: `url(https://alphagypsumboard.com/wp-content/uploads/2019/07/Background-website-01.jpg)` }}>
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold text-center">Give <span className='text-secondary'>Feedback</span></h1>
                        <p className="py-6 font-bold text-sky-400 text-xl">You give a important review, that's helps to grow us?</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form action="" onSubmit={handleAddReview}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className="input input-bordered" />

                                    <label className="label">
                                        <span className="label-text">Your Course</span>
                                    </label>
                                    <input type="text" placeholder="Course" name='course' className="input input-bordered" />

                                    <label className="label">
                                        <span className="label-text">Your Opinion</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" placeholder="Message" name='message'></textarea>
                                    <label className="label">
                                        <span className="label-text">Your Rating</span>
                                    </label>
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={35}
                                        activeColor="#ffd700"
                                    />,
                                    <button className="btn btn-secondary mt-1">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;