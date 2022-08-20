import React from 'react';
import { useForm } from "react-hook-form";
import './TaskCreate.css';
import taskSvg from '../../../../imgages/taskCreate.svg'

const TaskCreate = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // var options = { weekday: 'long', year: 'numeric', day: 'numeric', month: 'long' };
    const date = new Date()
    const currentDate = date.toLocaleDateString();
    const currentHour = date.toLocaleTimeString();

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
                result
            })
        reset()
    };
    return (
        <div>
            <h2 className='text-lg text-center font-bold'>Give task to Students</h2>
            <div className=' mx-auto  mb-10 grid lg:grid-cols-2 gap-4'>

                <div className="ml-10 mt-5 w-96 card bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <form className=' ' onSubmit={handleSubmit(onSubmit)}>


                            <div className='grid lg:grid-cols-2'>
                                <div>
                                    <p className='mt-2'>Task Created Date</p>
                                    <input readOnly value={currentDate}
                                        className=" mt-2 p-2 rounded-lg background-color" size="15"
                                        {...register("questionDeliverDate", {
                                            required: {
                                                value: true,

                                            }
                                        })}
                                    ></input>
                                </div>
                                <div>
                                    <p className='mt-2'>Task Created Hour</p>
                                    <input readOnly value={currentHour}
                                        className=" mt-2 p-2 rounded-lg background-color" size="15"
                                        {...register("questionDeliverHour", {
                                            required: {
                                                value: true,

                                            }
                                        })}
                                    ></input>
                                </div>
                            </div>

                            <div className='grid lg:grid-cols-2 mt-5'>
                                <div>
                                    <p className='mt-5'>Task Serial:</p>
                                    <input placeholder='Please provide task Serial'
                                        className="mt-2 p-2 rounded-lg background-color" size="15"
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
                                </div>


                                <div>
                                    <p className=''>Task submission Deadline:</p>
                                    <input placeholder='Please provide task deadline'
                                        className="mt-2 p-2 rounded-lg background-color" size="15"
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
                                </div>
                            </div>

                            <p className='mt-3 mb-2'>Task Name:</p>
                            <input placeholder='Input task name'
                                className=" p-2 rounded-lg background-color" size="30"
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
                            <p className=''>Task Description:</p>
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

                <div className='mt-36'>
                    <img className='w-96' src="https://i.ibb.co/XJbLX4f/3784896-removebg-preview.png" alt="" />

                </div>
            </div>

        </div>
    );
};

export default TaskCreate;