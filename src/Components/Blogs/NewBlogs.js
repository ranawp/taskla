import React from 'react';
import { Link } from 'react-router-dom';

const NewBlogs = ({ newBlog }) => {
    console.log(newBlog);
    const { blogTitle, img, blogDescription, blogUser, currentDate } = newBlog;
    return (
        <Link to='/blog/mongoDB'>
            <div className="card w-80 sm:w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="blogImg" className='w-full max-h-[300px]' /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto">{blogTitle}</h2>
                    <p className='text-xl font-sans' >{blogDescription}</p >

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