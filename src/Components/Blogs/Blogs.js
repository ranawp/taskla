import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-3 mx-10 my-20'>
            <div class="card w-96 bg-base-100 shadow-xl" onClick={() => alert('clk1')}>
                <figure><img src="https://tmarketing.vn/wp-content/uploads/2021/09/JavaScript-la-gi.jpg" alt="JS" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl" onClick={() => alert('clk2')}>
                <figure><img src="https://blog.logrocket.com/wp-content/uploads/2021/09/5-react-performance-optimization-techniques.png" alt="React" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl" onClick={() => alert('clk3')}>
                <figure><img src="https://www.liamkids.com/wp-content/uploads/2020/07/MongoDB.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;