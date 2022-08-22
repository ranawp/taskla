import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Detail from './Detail';


interface Announcement {
    _id: string
    notice: string
    announcement: string
    time: string
    read: boolean
}


const Announcement = () => {
    const [data, setAnnouncement] = useState<Announcement[]>([]);
    const [announcementDetail, setAnnouncementDetail] = useState<Announcement | any>({});

    const { notice, time, announcement } : any = announcementDetail;

    useEffect(() => {
        fetch('http://localhost:5000/announcement')
            .then(res => res.json())
            .then(data => setAnnouncement(data))
    }, [])

    const handleAnnounceDetail = (id) : void => {
        fetch(`http://localhost:5000/announcement/${id}`)
            .then(res => res.json())
            .then(data => setAnnouncementDetail(data))
        
    }

    const announcementFilter : Announcement[] = data.filter(a => (a.announcement && a.announcement));

    return (
        <div className="hero bg-base-200 mt-20">
            <div className="hero-content flex-col lg:flex-row mt-10">
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
                            <h2 className="card-title">{notice}</h2>
                            <p>{announcement}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Announcement;