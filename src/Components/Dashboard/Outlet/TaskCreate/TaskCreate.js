import React from 'react';
import { useForm } from "react-hook-form";
import './TaskCreate.css'

const TaskCreate = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://secret-castle-07996.herokuapp.com/inventory/`
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
    };
    return (
        <div className='w-50 mx-auto'>

            <div class="card w-96 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                        {/* <input placeholder='Product Name' className='mb-2' {...register("name", { required: true, maxLength: 20 })} /> */}
                        <h2 className='text-2xl'>Give task to Students</h2>

                        <textarea name="" id="" cols="50" rows="10" placeholder='Write student task' className='mb-2 taskcreate' {...register("name", { required: true, maxLength: 50 })}></textarea> <br />


                        <input className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white' type="submit" value="Submit" />
                    </form>
                </div>
            </div>


        </div>
    );
};

export default TaskCreate;