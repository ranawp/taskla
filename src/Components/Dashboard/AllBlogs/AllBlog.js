import React from 'react';
import { toast } from 'react-toastify';

const AllBlog = ({ allBlog, setNewBlogs, newBlogs, setEditModal }) => {
    const { blogTitle, img, blogDescription, blogUser, currentDate, _id } = allBlog;
    const blogDetail = blogDescription?.slice(0, 100);
    const handelDeleteButton = id => {
        const url = `http://localhost:5000/createBlog/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    const remaining = newBlogs?.filter(item => item._id !== id);
                    setNewBlogs(remaining);
                    toast.error("Deleted");
                }

            })
    }
    return (
        <div>
            <div className="card w-4/5 glass">
                <figure><img src={img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{blogTitle}</h2>
                    <p>{blogDetail}</p>
                </div>
                <div className='flex justify-around py-3 items-center'>
                    <h1 className='link' onClick={() => handelDeleteButton(_id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" classNeme="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </h1>
                    <label
                        htmlFor="Edit-blog-modal"
                        onClick={() => setEditModal(allBlog)}
                        className="modal-button link">
                        <svg xmlns="http://www.w3.org/2000/svg" classNeme="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </label>
                </div>
                <hr />
                <div>
                    <div className='flex justify-around py-3 items-center'>
                        <h2>{blogUser}</h2>
                        <h2>{currentDate}</h2>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AllBlog;