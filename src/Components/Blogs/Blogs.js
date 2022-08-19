import React, { useEffect, useState } from 'react';
import UseNewBlog from '../../hooks/UseNewBlog';
import NewBlogs from './NewBlogs';


const Blogs = () => {
    const [newBlogs] = UseNewBlog();
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 lg:mt-20 ml-3.5 lg:ml-10'>
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