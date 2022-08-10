import React from 'react';
import { useForm } from "react-hook-form";

const createBlog = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const photoStoreKey = 'b838c18dfd1418a3cd43999d8336cf12';
    const onSubmit = data => {
        const photo = data.photo[0];
        const formData = new FormData();
        formData.append('photo', photo);
        const url = `https://api.imgbb.com/1/upload?key=${photoStoreKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

        // reset();
    };
    return (
        <div>
            <div className='w-100 mx-auto my-10 ml-4'>

                <div class="card w-80 bg-base-100 shadow-2xl">
                    <div class="card-body">
                        <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                            <label className="label">
                                <span className="label-text">Blog Title</span>
                            </label>
                            <input placeholder='Blog Title'
                                className="p-2 rounded-lg background-color" size="30"
                                {...register("blogTitle", {
                                    required: {
                                        value: true,
                                        message: "Please write Blog Title"
                                    }
                                })}
                            ></input>
                            <label className="label text-red-600">
                                {errors.blogTitle?.type === 'required' && <span className="label-text-alt ">{errors.blogTitle.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type='file'
                                className="p-2 rounded-lg background-color" size="30"
                                {...register("photo", {
                                    required: {
                                        value: true,
                                        message: "Please Choose A Photo"
                                    }
                                })}
                            ></input>
                            <label className="label text-red-600">
                                {errors.photo?.type === 'required' && <span className="label-text-alt ">{errors.photo.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text">Blog Detail</span>
                            </label>
                            <textarea name="blogDetails" id="" cols="35" rows="7" placeholder='Write blog Details'
                                className="p-2 rounded-lg background-color"
                                {...register("blogDetails", {
                                    required: {
                                        value: true,
                                        message: "Please write Blog Detail"
                                    }
                                })}
                            ></textarea>
                            <label className="label text-red-600">
                                {errors.blogDetails?.type === 'required' && <span className="label-text-alt ">{errors.blogDetails.message}</span>}
                            </label>
                            <input className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white' type="submit" value="Submit" />

                        </form>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default createBlog;