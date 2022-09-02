import React, { useState } from 'react';

const BookPublish = () => {
    const imageStoragekey:string = 'b2898afe89c6cab65b047e7f8e7453c1';
    const [imgData, setImgdata] = useState<string>('');

    const handleFile = (e):void => {
        const image = e.target.files[0];
        const url = `https://api.imgbb.com/1/upload?key=${imageStoragekey}`;
        const formData = new FormData();
        formData.append('image', image);

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((result) => {
                setImgdata(result.data.url);
                // console.log(result)
            })
    }


    const formSubmit = (event):void => {
        event.preventDefault();
        const name = event.target.name.value;
        const author = event.target.author.value;
        const description = event.target.description.value;
        const link = event.target.link.value;

        fetch('https://cryptic-stream-86241.herokuapp.com/booksUpload', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                name: name,
                author: author,
                description: description,
                link: link,
                img: imgData
            })
        })
            .then((response) => response.json())
            .then((result) => console.log(result));
        event.target.reset();
    }
    return (
        <div className='mt-8'>
            <h1 className='text-2xl text-center font-bold text-primary dark:text-slate-50'>Book Upload</h1>
            <div className='md:grid md:grid-cols-2'>
                <div className='w-[80%]'>
                    <div className="card w-full  shadow-lg lg:w-full mt-10">
                        <div className="card-body">
                            <form action="" onSubmit={formSubmit}>
                                <div className='form-control overflow-hidden'>
                                    <label htmlFor="name" className='my-2  cursor-pointer dark:text-slate-50'>Name</label>
                                    <input type="text" className='input w-full dark:text-slate-50 bg-slate-100 dark:bg-[#182233]' name="name" id="name" placeholder='Type Book Name' />

                                    <label htmlFor="author" className='my-2  cursor-pointer dark:text-slate-50'>Author</label>
                                    <input type="text" className='input w-full dark:text-slate-50 bg-slate-100 dark:bg-[#182233]' name="author" id="author" placeholder='Type Author Name' />

                                    <label htmlFor="description" className='my-2  cursor-pointer dark:text-slate-50'>Description</label>
                                    <textarea name="description" className='w-full p-5 dark:text-slate-50 bg-slate-100 dark:bg-[#182233]' id="description" cols={30} rows={10} placeholder='Write Short Description'></textarea>

                                    <div className=' form-control'>
                                        <label htmlFor="image" className='my-2  cursor-pointer dark:text-slate-50'>Image</label>
                                        <input type="file" className='input w-full dark:text-slate-50 bg-slate-100 dark:bg-[#182233]' onChange={handleFile} id="image" />
                                    </div>

                                    <label htmlFor="book" className='my-2 cursor-pointer dark:text-slate-50'>Book Link</label>
                                    <input type="text" className='input w-full dark:text-slate-50 bg-slate-100 dark:bg-[#182233]' name="link" id="book" placeholder='Input Book Link' />

                                    <button className='btn btn-primary w-1/4 mt-5'>Upload</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-5xl mt-28 ml-20 hidden md:block">
                        <img className='w-[550px]' src="https://i.ibb.co/y6tBXM9/library-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookPublish;