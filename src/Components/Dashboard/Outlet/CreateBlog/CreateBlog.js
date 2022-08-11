import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CreateBlog = () => {
    const { register, handleSubmit } = useForm();
    // const [review, setReview] = useState({});
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
                        name: data.name,
                        description: data.description,

                        rattings: data.rattings,
                        img: img
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
    }



    return (
        <div>
            <div className='bg-base-100 shadow-2xl mx-2 py-4 mt-2 rounded-md px-10 w-80'>
                <form
                    className=''
                    onSubmit={handleSubmit(onSubmit)}>

                    <small>Blog Title</small><br />
                    <input className="my-2 p-2 rounded-lg background-color w-60" placeholder='Write Blog Title'  {...register("blogTitle", { required: true, maxLength: 20 })} /> <br />

                    <small>Image:</small> <br />
                    <input className="my-2 p-2 rounded-lg background-color w-60" placeholder='Quantity' type="file" {...register("image")} /> <br />

                    <small>Blog Description:</small><br />
                    <textarea className="my-2 p-2 rounded-lg background-color w-60" placeholder='Share your Blog Description'  {...register("blogDescription")} /> <br />

                    <input type="submit" value='Submit' className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white w-60' />
                </form>


            </div>
        </div>
    );
};

export default CreateBlog;