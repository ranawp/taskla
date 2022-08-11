import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './BlogDetails.css';

const BlogDetails = () => {
    const { blogId } = useParams();
    const [blogDetail, setBlogDetail] = useState({});
    const { blogTitle, img, blogDescription, currentDate, blogUser } = blogDetail;
    useEffect(() => {
        fetch(`http://localhost:5000/createBlog/${blogId}`)
            .then(res => res.json())
            .then(data => setBlogDetail(data));
    }, []);
    return (
        <div>
            <div className='background-style' >
                <h1 className='text-3xl mt-7' >{blogTitle}</h1>
            </div >

            <div className='image-style' >
                <img src={img} alt='blogImage'></img>
            </div >

            <div className='ml-10 my-4'>
                <h3>{blogUser}</h3>
                <h4>{currentDate}</h4>
            </div>

            <div className="px-8">
                <div className="mt-4  text-justify" >
                    <h1 className='text-3xl mt-7 text-center my-2'> {blogTitle} </h1 >
                    <p>{blogDescription}</p>
                </div >
            </div >
            <div className='text-center w-full'>
                <Link to="/blog" className='text-1xl font-bold mx-auto my-4 flex justify-center back-button py-4 w-60'>GO TO PREVIER PAGE</Link >
            </div>
        </div >
    );
};

export default BlogDetails;