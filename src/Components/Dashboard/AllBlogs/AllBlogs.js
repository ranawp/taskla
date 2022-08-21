import React from 'react';
import UseNewBlog from '../../../hooks/UseNewBlog';
import AllBlog from './AllBlog';

const AllBlogs = () => {
    const [newBlogs, setNewBlogs] = UseNewBlog();
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 ml-20 my-5'>
            {
                newBlogs.map(allBlog => <AllBlog
                    key={allBlog._id}
                    allBlog={allBlog}
                    setNewBlogs={setNewBlogs}
                    newBlogs={newBlogs}
                ></AllBlog>)
            }
        </div >
    );
};

export default AllBlogs;