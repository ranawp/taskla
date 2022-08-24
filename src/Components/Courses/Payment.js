import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigate } from "react-router-dom";
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51LWj23K8ptwSTL16cgQns3zGKObfUxbBzZKywkoWWabh1DyK9hcyOGwVzt4AeWH3IIj7YpYoKR8T64ECAjRd0gdF00uVOagkZj');

const Payment = () => {
    let navigate = useNavigate()
    return (
        <div className='min-h-screen mt-7'>
            <span className='bg-sky-500 ml-30 cursor-pointer rounded-l-full  p-4 ml-10' onClick={() => navigate(-1)}>Back</span>
            <div className='sm:flex  justify-evenly'>
                <div className='sm:min-h-screen px-10 flex justify-between relative mt-10'>
                    <div className='absolute z-10 top-[40%] right-[50%]'>
                    </div>
                    <div className="card w-80 h-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/c1gTgV5/website-development.jpg" alt="Shoes" /></figure>
                        <div className="card-body relative">
                            <h1 className='text-2xl font-bold'>Web Development crash course.Build Your carrear with tech. <span className='ml-[100px]'>$ 100</span></h1>
                        </div>
                    </div>
                </div>
                <div className='mt-10 px-10 flex justify-between order-first '>
                    <div className="card w-80 h-96 flex bg-base-100">
                        <div className="card-body mt-3">
                            <div>
                                <h1 className='text-2xl font-bold mb-4'>Web Development crash course</h1>
                                <span>Please Pay: $ 100</span>
                                <div className='my-5'>
                                    <Elements stripe={stripePromise}>
                                        <CheckoutForm />
                                    </Elements>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Payment;