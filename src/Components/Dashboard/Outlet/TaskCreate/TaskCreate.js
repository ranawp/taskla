import React from 'react';
import { useForm } from "react-hook-form";
import './TaskCreate.css'

const TaskCreate = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/tasks`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
        reset()
    };
    return (
        <div className='w-50 mx-auto'>

            <div class="card w-96 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-2xl'>Give task to Students</h2>
                        <textarea name="" id="" cols="50" rows="10" placeholder='Write student task'
                            className=" mt-2 p-2 rounded-lg background-color"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Please write Task massage"
                                }

                            })}
                        ></textarea>
                        <label className="label text-red-600">
                            {errors.name?.type === 'required' && <span className="label-text-alt ">{errors.name.message}</span>}
                        </label>
                        <input className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white' type="submit" value="Submit" />

                    </form>

                </div>
            </div>


        </div>
    );
};

export default TaskCreate;