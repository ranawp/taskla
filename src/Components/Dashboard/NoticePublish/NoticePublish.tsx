import React, { useState } from 'react';

interface Date {
    month: string
    day: string
    year: string
}

const NoticePublish = () => {


    const options: any = { month: 'short', day: 'numeric', year: 'numeric' };
    const dateFunction = new Date().toLocaleDateString("en-UK", options);

    // time 
    let time = new Date().toLocaleTimeString();
    const [cTime, setCTime] = useState<String>(time);
    const updateTime = (): void => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
    }
    setInterval(updateTime, 1000);
    const Mydate: string = dateFunction;
    const Mytime: String = cTime;


    const dateTime = Mydate + "," + Mytime;

    // console.log(dateTime);

    const handleNoticeForm = (event: any): void => {
        event.preventDefault();
        const notice = event.target.title.value;
        const announcement = event.target.announcement.value;
        const read = false;
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
            <h2 className='text-3xl p-6 font-bold  text-center text-primary dark:text-slate-50'>Important <span className='text-secondary'>Notice</span></h2>


            <div className='mb-10 grid lg:grid-cols-2 gap-4'>
                <div className="p-16">

                    <img className="w-96" src="https://i.ibb.co/XJbLX4f/3784896-removebg-preview.png" alt="" />

                </div>


                {/* <form onSubmit={handleNoticeForm} action=""> */}


                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white dark:bg-[#182233] mx-16">
                    <div className="card-body">
                        <form className='' action="" onSubmit={handleNoticeForm}>
                            <div className="form-control dark:bg-[#182233]">
                                <label className="label">
                                    <span className="label-text font-bold  text-primary dark:text-slate-50">Title</span>
                                </label>
                                <input type="text" placeholder="Title" name='title' className="input border dark:border-[#293241] bg-slate-100 dark:bg-[#182233] dark:text-slate-50" />

                                <label className="label">
                                    <span className="label-text text-primary dark:text-slate-50 font-bold">Announcement</span>
                                </label>
                                <textarea className="textarea border dark:border-[#293241] h-[200px] bg-slate-100 dark:bg-[#182233] dark:text-slate-50" placeholder="Announcement" name='announcement'></textarea>
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