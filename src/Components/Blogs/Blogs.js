import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='grid grid-cols-3 gap-4 my-20'>
            <Link to='/blogdetails1'>
                <div class="card w-96 bg-base-100 shadow-xl" onClick={() => alert('clk1')}>
                    <figure><img src="https://tmarketing.vn/wp-content/uploads/2021/09/JavaScript-la-gi.jpg" alt="JS" /></figure>
                    <div class="card-body">
                        <h2 class="card-title mx-auto">What is JavaScript</h2>
                        <p className='text-xl font-sans'>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.As of 2022, JavaScript</p>
                        {/* As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. */}
                    </div>
                </div>

            </Link>
            <Link to='/'>
                <div class="card w-96 bg-base-100 shadow-xl" onClick={() => alert('clk2')}>
                    <figure><img src="https://blog.logrocket.com/wp-content/uploads/2021/09/5-react-performance-optimization-techniques.png" alt="React" /></figure>
                    <div class="card-body">
                        <h2 class="card-title mx-auto">What is React JS</h2>
                        <p className='text-xl font-sans'>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</p>
                    </div>
                </div>
            </Link>
            <Link to='/'>
                <div class="card w-96 bg-base-100 shadow-xl" onClick={() => alert('clk3')}>
                    <figure><img src="https://www.liamkids.com/wp-content/uploads/2020/07/MongoDB.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title mx-auto">What is MongoDB</h2>
                        <p className='text-xl font-sans'>MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.</p>
                        {/* MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions. */}
                    </div>
                </div>
            </Link>
        </div>
    );
};


export default Blogs;