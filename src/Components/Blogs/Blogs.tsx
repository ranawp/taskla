import React, { useEffect, useState } from 'react';
import UseNewBlog from '../../hooks/UseNewBlog';
import Loading from '../../Share/Loading';
import NewBlogs from './NewBlogs';

interface BlogType {
    _id: string
    blogTitle: string
    blogDescription: string
    img: string
    currentDate: string
    blogUser: string
}

const Blogs = () => {
    // const [newBlogs] : any = UseNewBlog();
    
    const [newBlogs, setNewBlogs] = useState<BlogType[]>([]);
    const [loading, isLoading] = useState(false)

    // const [newBlogs, loading, isLoading] = UseNewBlog();
    useEffect(() => {
        isLoading(true)
        fetch('https://cryptic-stream-86241.herokuapp.com/createBlog')
            .then(res => res.json())
            .then(data => {
                setNewBlogs(data);
                isLoading(false)
            })
    }, []);

    return (
        <div className='mt-32'>
            {loading && <Loading />}
            <div className='grid sm:grid-cols-3 gap-4 my-20 mx-5 ' >


                {
                    newBlogs.map(newBlog => <NewBlogs
                        key={newBlog._id}
                        newBlog={newBlog}
                    ></NewBlogs>)
                }
            </div >
        </div>
    );
};


export default Blogs;