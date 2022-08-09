import React from 'react';
import { useForm } from "react-hook-form";

const createBlog = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        // reset();
    };
    return (
        <div>
            <div className='w-100 mx-auto my-10 ml-4'>

                <div class="card w-80 bg-base-100 shadow-2xl">
                    <div class="card-body">
                        <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder='Blog Title'
                                className=" mt-2 p-2 rounded-lg background-color" size="30"
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
                            <textarea name="blogDetails" id="" cols="35" rows="7" placeholder='Write blog Details'
                                className=" mt-2 p-2 rounded-lg background-color"
                                {...register("blogDetails", {
                                    required: {
                                        value: true,
                                        message: "Please write blog Detail"
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