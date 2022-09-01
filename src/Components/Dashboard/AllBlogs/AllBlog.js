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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>

                    </h1>
                    <label
                        htmlFor="Edit-blog-modal"
                        onClick={() => setEditModal(allBlog)}
                        className="modal-button link">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
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