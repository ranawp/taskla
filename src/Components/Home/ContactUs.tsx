import React from 'react';
import { toast } from 'react-toastify';

const ContactUs = () => {

    const onSubmitForm = e => {
        toast.success('Message Sent!!')
        e.target.reset();
    }

    return (
        <div>
            <h1 className='lg:text-[40px] mt-32 text-[32px] text-center text-primary font-bold' > Contact With Taskla</h1 >
            <div className='container mx-auto grid items-center grid-cols-1 lg:grid-cols-2'>
                <div>
                    <img className='w-[500px] md:mx-auto' src='https://i.ibb.co/TBqMpzt/contact-us.png' alt="" />
                </div>
                <div className='mx-auto w-80' >

                    <form action="https://formsubmit.co/abutahirjunayed@gmail.com" method="POST" target='_blank' className='w-80' >
                        <input size={40} type="text" placeholder="Your Name" name='Name' className="input input-bordered mb-5 w-80" /><br />
                        <input size={40} type="text" placeholder="Email Address" name='Email' className="input input-bordered mb-5 w-80" /><br />
                        <textarea cols={42} className="textarea textarea-bordered w-80" name='Message' placeholder="Enter your message" ></textarea ><br />

                        <input size={40} className='btn btn-secondary text-white w-80' type="submit" value="Send Message" />
                    </form >
                </div >
            </div>
        </div>

    );
};

export default ContactUs;


{/*  */ }