import React, { useEffect, useState } from 'react';
import UseNewBlog from '../../hooks/UseNewBlog';
import NewBlogs from './NewBlogs';


const Blogs = () => {
    const [newBlogs] = UseNewBlog();
    return (
        <div className='grid sm:grid-cols-3 gap-4 my-20 mx-5' >
            {
                newBlogs.map(newBlog => <NewBlogs
                    key={newBlog._id}
                    newBlog={newBlog}
                ></NewBlogs>)
            }
        </div >
    );
};


export default Blogs;