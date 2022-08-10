import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const BlogCreate = () => {
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
                console.log(result)
                // if (result.success) {
                //     const img = result.data.url;
                //     const product = {
                //         name: data.name,
                //         description: data.description,

                //         rattings: data.rattings,
                //         img: img
                //     }

                //     //send to database 
                //     fetch('https://calm-coast-29564.herokuapp.com/reviews', {
                //         method: 'POST',
                //         headers: {
                //             'content-type': 'application/json'
                //         },
                //         body: JSON.stringify(product)
                //     })
                //         .then(res => res.json())
                //         .then(result => {
                //             console.log('products', result)
                //         })
                // }

            })
    }



    return (
        <div className='mt-5 p-6 w-full'>
            <h3 className='text-center text-primary font-bold text-2xl'>Add Blog </h3>
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <small>Blog Name <br /></small><input class="input input-bordered w-full max-w-xs" placeholder='Write Your Name'  {...register("name", { required: true, maxLength: 20 })} /> <br />



                    <small>Description:</small><br /><textarea class="input input-bordered w-full max-w-xs" placeholder='Share your Experience'  {...register("description")} /> <br />





                    <small>Image:</small> <br /><input class="input input-bordered w-50 max-w-xs" placeholder='Quantity' type="file" {...register("image")} /> <br />

                    <input type="submit" value='Add Review' className='mt-2 text-white btn btn-active btn-primary  max-w-xs' />
                </form>




            </div>
        </div>
    );
};

export default BlogCreate;
