import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h1 className='lg:text-[40px] text-[32px] text-center text-primary p-10 font-bold' > Contact With Taskla</h1 >
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <img className='w-[500px]' src='https://i.ibb.co/TBqMpzt/contact-us.png' alt="" />
                </div>
                <div className='h-[600px] mx-auto' >

                    <form action="https://formsubmit.co/abutahirjunayed@gmail.com" method="POST" target='_blank' className='' >
                        <input size='40' type="text" placeholder="Your Name" name='Name' className="input input-bordered mb-5 " /><br />
                        <input size='40' type="text" placeholder="Email Address" name='Email' className="input input-bordered mb-5" /><br />
                        <textarea cols='42' className="textarea textarea-bordered" name='Message' placeholder="Enter your message" ></textarea ><br />

                        <input size='40' className='btn btn-secondary text-white' type="submit" value="Send Message" />
                    </form >
                </div >
            </div>
        </div>

    );
};

export default ContactUs;


{/*  */ }