import React from 'react';

const AllBlog = ({ allBlog }) => {
    const { blogTitle, img, blogDescription, blogUser, currentDate, _id } = allBlog;
    const blogDetail = blogDescription?.slice(0, 100);
    return (
        <div>
            <div className="card w-4/5 glass">
                <figure><img src={img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{blogTitle}</h2>
                    <p>{blogDetail}</p>
                </div>
                <div className='flex justify-around py-3 items-center'>
                    <h1>Delete</h1>
                    <h1>Edite</h1>
                </div>
                <hr />
                <div>
                    <div className='flex justify-around py-3 items-center'>
                        <h2>{blogUser}</h2>
                        <h2>{currentDate}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlog;