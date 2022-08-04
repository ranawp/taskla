import React from 'react';
import { useForm } from "react-hook-form";
import './TaskCreate.css';
import taskSvg from '../../../../imgages/taskCreate.svg'

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
        <div>
            <div className='w-50 mx-auto border mb-10'>

                <div class="card w-80 bg-base-100 shadow-2xl">
                    <div class="card-body">
                        <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                            <h2 className='text-2xl'>Give task to Students</h2>
                            <input placeholder='Task name'
                                className=" mt-2 p-2 rounded-lg background-color" size="30"
                                {...register("taskName", {
                                    required: {
                                        value: true,
                                        message: "Please write Task Name"
                                    }
                                })}
                            ></input>
                            <label className="label text-red-600">
                                {errors.taskName?.type === 'required' && <span className="label-text-alt ">{errors.taskName.message}</span>}
                            </label>

                            <input placeholder='Please provide task Serial'
                                className=" mt-2 p-2 rounded-lg background-color" size="30"
                                {...register("taskSerial", {
                                    required: {
                                        value: true,
                                        message: "Task serial"
                                    }
                                })}
                            ></input>
                            <label className="label text-red-600">
                                {errors.taskSerial?.type === 'required' && <span className="label-text-alt ">{errors.taskSerial.message}</span>}
                            </label>

                            <input placeholder='Please provide task deadline'
                                className=" mt-2 p-2 rounded-lg background-color" size="30"
                                {...register("taskDeadline", {
                                    required: {
                                        value: true,
                                        message: "Task serial"
                                    }
                                })}
                            ></input>
                            <label className="label text-red-600">
                                {errors.taskDeadline?.type === 'required' && <span className="label-text-alt ">{errors.taskDeadline.message}</span>}
                            </label>

                            <textarea name="" id="" cols="35" rows="7" placeholder='Write student task'
                                className=" mt-2 p-2 rounded-lg background-color"
                                {...register("taskMassage", {
                                    required: {
                                        value: true,
                                        message: "Please write Task massage"
                                    }
                                })}
                            ></textarea>
                            <label className="label text-red-600">
                                {errors.taskMassage?.type === 'required' && <span className="label-text-alt ">{errors.taskMassage.message}</span>}
                            </label>
                            <input className=' bg-blue-700 border-0 px-3 py-1 button  rounded text-white' type="submit" value="Submit" />

                        </form>

                    </div>
                </div>


            </div>
            {/* <div>
                {taskSvg}
            </div> */}
        </div>
    );
};

export default TaskCreate;