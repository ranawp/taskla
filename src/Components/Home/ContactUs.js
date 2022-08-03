import React from 'react';

const ContactUs = () => {
    return (
        <div className='h-[600px] bg-gray-200 rounded-md w-full' >
            <h1 className='lg:text-5xl sm:text-4xl text-center p-10 font-bold text-gray-500' > Contact With Taskla</h1 >
            <form action="https://formsubmit.co/abutahirjunayed@gmail.com" method="POST" target='_blank' className='grid justify-items-center' >
                <input type="text" placeholder="Your Name" name='Name' className="input input-bordered lg:w-full sm:w-20 lg:max-w-[800px] sm:max-w-[200px] mb-5" /><br />
                <input type="text" placeholder="Email Address" name='Email' className="input input-bordered lg:w-full sm:w-20 max-w-[800px] mb-5" /><br />
                <textarea className="textarea textarea-bordered h-[150px] lg:w-[800px] sm:w-24" name='Message' placeholder="Enter your message" ></textarea ><br />
                <input className='btn btn-success text-white lg:w-[800px] sm:w-24' type="submit" value="Send Message" />
            </form >
        </div >
    );
};

export default ContactUs;