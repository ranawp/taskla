import React from 'react';
import { useState } from 'react';
import UseNewBlog from '../../../hooks/UseNewBlog';
import AllBlog from './AllBlog';
import EditBlogModal from './EditBlogModal';

const AllBlogs = () => {
    const [newBlogs, setNewBlogs] : any = UseNewBlog();
    const [blogEditModal, setEditModal] = useState<Object | null>(null);
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 ml-20 my-5'>
                {
                    newBlogs.map(allBlog => <AllBlog
                        key={allBlog._id}
                        allBlog={allBlog}
                        setNewBlogs={setNewBlogs}
                        newBlogs={newBlogs}
                        setEditModal={setEditModal}
                    ></AllBlog>)
                }
            </div >
            {
                blogEditModal && <EditBlogModal
                    blogEditModal={blogEditModal}
                ></EditBlogModal>
            }
        </>
    );
};

export default AllBlogs;