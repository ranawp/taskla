import React, { useState } from 'react';
import swal from 'sweetalert';

interface Date {
    month: string
    day: string
    year: string
}

const NoticePublish = () => {


    const options: Date | any = { month: 'short', day: 'numeric', year: 'numeric' };
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
        const data = { notice, announcement, time: dateTime, read }
        fetch(`https://cryptic-stream-86241.herokuapp.com/notice`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json) {
                    swal("Notice Published", "success");
                }
            });

        event.target.reset();
    }

    return (
        <div>
            <h2 className='text-3xl p-6 font-bold  text-center'>Important <span className='text-secondary'>Notice</span></h2>


            <div className='mb-10 grid lg:grid-cols-2 gap-4'>
                <div className="p-16">

                    <img className="w-96" src="https://i.ibb.co/XJbLX4f/3784896-removebg-preview.png" alt="" />

                </div>
                <div className="sm:ml-10 mt-5 mx-auto w-80 sm:w-96 card bg-base-100 shadow-2xl">
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