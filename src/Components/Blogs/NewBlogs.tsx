import React from 'react';
import { Link } from 'react-router-dom';

const NewBlogs = ({ newBlog }) => {
    const { blogTitle, img, blogDescription, blogUser, currentDate, _id } = newBlog;
    const blogDetail = blogDescription?.slice(0, 100);

    return (
        <Link to={'/createBlog/' + _id}>
            <div className="card lg:w-80 mx-auto sm:w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="blogImg" className='w-full max-h-[300px]' /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto">{blogTitle}</h2>
                    <p className='text-xl font-sans' >{blogDetail}</p >

                </div >
                <hr />
                <div className="card-actions justify-between p-8 text-slate-500" >
                    <div>{blogUser}</div >
                    <div>{currentDate}</div >
                </div >
            </div >
        </Link>
    );
};

export default NewBlogs;