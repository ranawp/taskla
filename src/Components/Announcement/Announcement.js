import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Detail from './Detail';

const Announcement = () => {
    const [data, setAnnouncement] = useState([]);
    const [announcementDetail, setAnnouncementDetail] = useState({});
    
    const {notice, time, announcement} = announcementDetail

    useEffect(() => {
        fetch('https://cryptic-stream-86241.herokuapp.com/announcement')
            .then(res => res.json())
            .then(data => setAnnouncement(data))
    }, [])

    const handleAnnounceDetail = id => {
            fetch(`https://cryptic-stream-86241.herokuapp.com/announcement/${id}`)
            .then(res => res.json())
            .then(data => setAnnouncementDetail(data))
    }

    const announcementFilter = data.filter(a => (a.announcement && a.announcement));
    return (
        <div class="hero bg-base-200 ">
            <div class="hero-content flex-col lg:flex-row mt-10">
                <div className='flex flex-col gap-4 w-[500px] overflow-y-auto h-96'>
                    {announcementFilter.map(announcement => <Detail
                        key={announcement._id}
                        announcement={announcement}
                        handleAnnounceDetail={handleAnnounceDetail}
                    />)}
                </div>
                <div>
                    <div className="card flex-shrink-0 w-[700px] max-w-sm shadow-2xl bg-base-100 mx-auto h-[500px]">
                        <div className="card-body">
                            <h2 class="card-title">{notice}</h2>
                            <p>{announcement}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Announcement;