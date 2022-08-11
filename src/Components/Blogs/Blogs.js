import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner_4 from '../../asset/thumbnail_4.jpg';
import NewBlogs from './NewBlogs';


const Blogs = () => {
    const [newBlogs, setNewBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/createBlog')
            .then(res => res.json())
            .then(data => {
                setNewBlogs(data);
            })
    }, []);
    return (
        <div className='grid sm:grid-cols-3 gap-4 my-20 mx-5' >
            {
                newBlogs.map(newBlog => <NewBlogs
                    key={newBlog._id}
                    newBlog={newBlog}
                ></NewBlogs>)
            }
            {/* <div>
                <Link to='/blog/javaScript'>
                    <div className="card w-80 sm:w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://tmarketing.vn/wp-content/uploads/2021/09/JavaScript-la-gi.jpg" alt="JS" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">What is JavaScript</h2>
                            <p className='text-xl font-sans' > JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.As of 2022, JavaScript</p >
                            As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.
                        </div >
                    </div >

                </Link >
                <Link to='/blog/reactjs'>
                    <div className="card w-80 sm:w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://blog.logrocket.com/wp-content/uploads/2021/09/5-react-performance-optimization-techniques.png" alt="React" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">What is React JS</h2>
                            <p className='text-xl font-sans' > React is a free and open - source front - end JavaScript library for building user interfaces based on UI components.It is maintained by Meta and a community of individual developers and companies.</p >
                        </div >
                    </div >
                </Link >
                <Link to='/blog/mongoDB'>
                    <div className="card w-80 sm:w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://www.liamkids.com/wp-content/uploads/2020/07/MongoDB.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">What is MongoDB</h2>
                            <p className='text-xl font-sans' > MongoDB is a source - available cross - platform document - oriented database program.Classified as a NoSQL database program, MongoDB uses JSON - like documents with optional schemas.</p >
                            MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions.
                        </div >
                    </div >
                </Link >
                <Link to='/blog/blog4'>
                    <div className="card w-80 sm:w-96 bg-base-100 shadow-xl">
                        <figure><img src={banner_4} alt="Shoes" className='w-full max-h-[300px]' /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">সহজে কোন প্রোগ্রামিং ল্যাঙ্গুয়েজ শেখা যায়?</h2>
                            <p className='text-xl font-sans' > প্রোগ্রামিং ল্যাঙ্গুয়েজ কি ? প্রোগ্রামিং ল্যাঙ্গুয়েজ হলো কম্পিউটারের সাথে...</p >

                        </div >
                        <hr />
                        <div className="card-actions justify-between p-8 text-slate-500" >
                            <div className="" > Samad Ahmad</div >
                            <div className="" > Jul 26, 2022</div >
                        </div >
                    </div >
                </Link >
            </div> */}
        </div >
    );
};


export default Blogs;