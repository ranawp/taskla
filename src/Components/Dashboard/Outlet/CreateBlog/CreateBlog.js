import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../../firebase.init';

const CreateBlog = () => {

    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const blogUser = user?.displayName;
    const date = new Date();
    const currentDate = date.toLocaleDateString();
    const imageStoragekey = '3cf84befed9b9bcd8f1d01c2b4412701';

    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStoragekey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        blogTitle: data.blogTitle,
                        blogDescription: data.blogDescription,
                        img: img,
                        currentDate: currentDate,
                        blogUser: blogUser
                    }

                    //send to database 
                    fetch('http://localhost:5000/createBlog', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log('products', result)
                        })
                }

            })
        reset();
    }



    return (
        <div>
            <div className='bg-white dark:bg-[#182233] lg:shadow-2xl mx-auto py-4 mt-2 rounded-md px-10 lg:w-9/12'>
                <form
                    className=''
                    onSubmit={handleSubmit(onSubmit)}>


                    <p className=' font-bold dark:text-slate-50'>Blog Title</p><br />
                    <input className=" p-2 rounded-lg w-full dark:text-slate-50 border dark:border-[#293343] bg-white dark:bg-[#182233]" placeholder='Write Blog Title'  {...register("blogTitle", { required: true, maxLength: 20 })} /> <br />

                    <p className='mt-3 font-bold dark:text-slate-50'>Image</p> <br />
                    <input className="p-2 rounded-lg background-color w-full dark:text-slate-50 border dark:border-[#293343] bg-white dark:bg-[#182233]" placeholder='Quantity' type="file" {...register("image")} /> <br />

                    <p className='font-bold mt-5 dark:text-slate-50'>Blog Description</p><br />
                    <textarea className=" p-2 rounded-lg background-color w-full h-64 dark:text-slate-50 border dark:border-[#293343] bg-white dark:bg-[#182233]" placeholder='Share your Blog Description'  {...register("blogDescription")} /> <br />

                    <input type="submit" value='Submit' className=' bg-blue-700 border-0 py-2 px-4 button  rounded text-white' />
                </form>


            </div>
        </div>
    );
};

export default CreateBlog;