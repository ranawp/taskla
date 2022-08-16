import React from 'react';
import { Link } from 'react-router-dom';

const NewBlogs = ({ newBlog }) => {
    const { blogTitle, img, blogDescription, blogUser, currentDate, _id } = newBlog;
    const blogDetail = blogDescription?.slice(0, 100);

    return (
        <Link to={'/createBlog/' + _id}>
            <div className="card w-96 glass">
                <figure><img src={img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{blogTitle}</h2>
                    <p>{blogDetail}</p>
                </div>
                <hr />
                <div className='flex justify-around py-3 items-center'>
                    <h2>{blogUser}</h2>
                    <h2>{currentDate}</h2>
                </div>
            </div>
        </Link>
    );
};

export default NewBlogs;