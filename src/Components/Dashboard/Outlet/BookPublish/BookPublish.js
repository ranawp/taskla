import React, { useState } from 'react';

const BookPublish = () => {
    const imageStoragekey= '3cf84befed9b9bcd8f1d01c2b4412701';
    // const [imgData,setImgdata] = useState();
    // console.log(imgData)
    const formSubmit = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const author = event.target.author.value;
        const description = event.target.description.value;
        const image = event.target.image.value;
        const link = event.target.link.value;
        const data = {name,author,description,image,link}
        console.log(data)

        event.target.reset();
    }
    return (
        <div className='mt-8'>
            <h1 className='text-2xl text-center font-bold text-primary dark:text-slate-50'>Book Upload</h1>
            <div className="card w-full  shadow-lg lg:w-2/5 mt-10">
                <div className="card-body">
                    <form action="" onSubmit={formSubmit}>
                        <div className='form-control overflow-hidden'>
                            <label htmlFor="name" className='my-2  cursor-pointer dark:text-slate-50'>Name</label>
                            <input type="text" className='input w-full dark:text-slate-50 bg-slate-100 dark:bg-[#182233]' name="name" id="name" placeholder='Type Book Name'/>

                            <label htmlFor="author" className='my-2  cursor-pointer dark:text-slate-50'>Author</label>
                            <input type="text" className='input w-full dark:text-slate-50 bg-slate-100 dark:bg-[#182233]' name="author" id="author" placeholder='Type Author Name'/>

                            <label htmlFor="description" className='my-2  cursor-pointer dark:text-slate-50'>Description</label>
                            <textarea name="description" className='w-full p-5 dark:text-slate-50 bg-slate-100 dark:bg-[#182233]' id="description" cols="30" rows="10" placeholder='Write Short Description'></textarea>

                            <label htmlFor="image" className='my-2  cursor-pointer dark:text-slate-50'>Image</label>
                            <input type="file" className='input w-full dark:text-slate-50 bg-slate-100 dark:bg-[#182233]' name='img' id="image" />

                            <label htmlFor="book" className='my-2 cursor-pointer dark:text-slate-50'>Book Link</label>
                            <input type="text" className='input w-full dark:text-slate-50 bg-slate-100 dark:bg-[#182233]' name="link" id="book" placeholder='Input Book Link'/>

                            <button className='btn btn-primary w-1/4 mt-5'>Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookPublish;