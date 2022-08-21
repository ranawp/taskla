import React, { useState } from 'react';

const NoticePublish = () => {


    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const dateFunction = new Date().toLocaleDateString("en-UK", options);

    // time 
    let time = new Date().toLocaleTimeString();
    const [cTime, setCTime] = useState(time);
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
    }
    setInterval(updateTime, 1000);
    const Mydate = dateFunction;
    const Mytime = cTime;


    const dateTime = Mydate + "," + Mytime;

    // console.log(dateTime);

    const handleNoticeForm = event => {
        event.preventDefault();
        const notice = event.target.title.value;
        const announcement = event.target.announcement.value;
        // const read = false;
        const data = { notice, announcement, time: dateTime }
        fetch(`http://localhost:5000/notice`, {
            method: 'POST',
            body: JSON.stringify(data),
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
            <h2 className='text-3xl p-6 font-bold  text-center'>Important <span className='text-secondary'>Notice</span></h2>


            <div className=" mx-auto  mb-10 grid lg:grid-cols-2 justify-center align-center gap-2 mt-4">


           <div className="p-16">

           <img className="w-96" src="https://i.ibb.co/XJbLX4f/3784896-removebg-preview.png" alt=""/>

           </div>


            {/* <form onSubmit={handleNoticeForm} action=""> */}
   

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-16">
                <div className="card-body">
                    <form action="" onSubmit={handleNoticeForm}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Title</span>
                            </label>
                            <input type="text" placeholder="Title" name='title' className="input input-bordered" />

                            <label className="label">
                                <span className="label-text font-bold">Announcement</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-[200px]" placeholder="Announcement" name='announcement'></textarea>
                            <button className="btn btn-primary mt-5 text-white">Submit</button>

                            <button className="btn btn-secondary mt-5">Submit</button>
                        </div>
                    </form>

                </div>
            </div>

       
        
            {/* </form> */}
            </div>



        </div>
    );
};

export default NoticePublish;