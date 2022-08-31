import React from 'react';
import { useForm } from 'react-hook-form';


const ModuleUpload = () => {
    const { register, handleSubmit, reset } = useForm();
    // const [review, setReview] = useState({});
    // const imageStoragekey = '3cf84befed9b9bcd8f1d01c2b4412701';
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
                console.log(result)
            })
        reset()
    };

    return (
        <div>
            <h2 className='text-2xl text-center text-primary font-bold mt-7'>
                Upload  <span className='text-secondary'>Module Video</span>
            </h2>
            <div className='mb-10 grid lg:grid-cols-2 gap-4'>

                <div className="sm:ml-10 mt-5 mx-auto w-80 sm:w-96 card bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <p className='mt-5'>Milestone Serial:</p> <small>Ex:Milestone 01</small>
                            <input class="input input-bordered w-full max-w-xs" placeholder='Write milestone serial'  {...register("MilstoneSerialNo", { required: true })} /> <br />

                            <p>Milstone Name: <br /> <small>Ex: Personal portfolio </small> <br /></p>
                            <input class="input input-bordered w-full max-w-xs" placeholder='Write milestone Name'  {...register("MilstoneName", { required: true })} /> <br />

                            <p>Module Text introduction: <br /><small>Write here introduction</small>  <br /></p>
                            <textarea name="" id="" cols="35" rows="7" placeholder='Write student task'
                                className=" mt-2 p-2 rounded-lg background-color"
                                {...register("moduleIntroduction", {
                                    required: {
                                        value: true,
                                    }
                                })}
                            ></textarea> <br />



                            <p>Module Name and serial: <br /><small>Ex: Module 1-1: HTMl tag</small>  <br /></p>
                            <input class="input input-bordered w-full max-w-xs" placeholder='Write module Name'  {...register("ModuleNameserial1", { required: true })} /> <br />

                            <p>Module video 1: <br /> <small>Ex: https://www.youtube.com/embed/iHUfq-t3zkE</small>  <br /></p>
                            <input class="input input-bordered w-full max-w-xs" placeholder='Write youtube video embeded link'  {...register("Modulevideo1", { required: true })} /> <br />

                            {/* second module name and video */}

                            <p>Module Name and serial 2: <br /><small>Ex: Module 1-2: Html History</small>  <br /></p>
                            <input class="input input-bordered w-full max-w-xs" placeholder='Write module Name'  {...register("ModuleNameserial2", { required: true })} /> <br />

                            <p>Module video 2: <br /><small>Ex: https://www.youtube.com/embed/iHUfq-t3zkE</small>  <br /></p>
                            <input class="input input-bordered w-full max-w-xs" placeholder='Write video link'  {...register("Modulevideo2", { required: true })} /> <br />

                            {/* third module name and video */}

                            <p>Module Name and serial3:  <br /></p>
                            <input class="input input-bordered w-full max-w-xs" placeholder='Write module Name'  {...register("ModuleNameserial3", { required: true })} /> <br />

                            <p>Module video 3:  <br /></p>
                            <input class="input input-bordered w-full max-w-xs" placeholder='Write video link'  {...register("Modulevideo3", { required: true })} /> <br />

                            {/* fourth module name and video */}
                            <p>Module Name and serial4:  <br /></p>
                            <input class="input input-bordered w-full max-w-xs" placeholder='Write module Name'  {...register("ModuleNameserial4", { required: true })} /> <br />

                            <p>Module video 4:  <br /></p>
                            <input class="input input-bordered w-full max-w-xs" placeholder='Write video link'  {...register("Modulevideo4", { required: true })} /> <br />

                            {/* fifth module name and video */}
                            <p>Module Name and serial5:  <br /></p>
                            <input class="input input-bordered w-full max-w-xs" placeholder='Write module Name'  {...register("ModuleNameserial5", { required: true })} /> <br />
                            <p>Module video 5:  <br /></p>
                            <input class="input input-bordered w-full max-w-xs" placeholder='Write video link'  {...register("Modulevideo5", { required: true })} /> <br />

                            {/* sixth module name and video */}
                            <p>Module Name and serial6:  <br /></p>
                            <input class="input input-bordered w-full max-w-xs" placeholder='Write module Name'  {...register("ModuleNameserial6", { required: true })} /> <br />

                            <p>Module video 6:  <br /></p>
                            <input class="input input-bordered w-full max-w-xs" placeholder='Write video link'  {...register("Modulevideo6", { required: true })} /> <br />

                            {/* assignment created time  */}
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

                            {/* submitsson deadline */}
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



                            </div>
                            {/* assignment instruction   */}
                            <p>Assignment Name and serial  <br /></p>
                            <input class="input input-bordered w-full max-w-xs" placeholder='Write module Name'  {...register("asignmentName", { required: true })} /> <br />

                            <p>Assignment instruction massage</p>
                            <textarea name="" id="" cols="30" rows="10"
                                className=" mt-2 p-2 rounded-lg background-color"
                                {...register("assignmentInstruction", {
                                    required: {
                                        value: true,

                                    }
                                })}
                            ></textarea> <br />

                            <p>Will you lock this milestone? write: lock<br /> <small>Note:only first Milstone video write unlock and other milestone need to write lock</small> </p>
                            <input class="input input-bordered w-full max-w-xs" placeholder=' lock'  {...register("submit", { required: true })} /> <br />


                            <input type="submit" value='Submit' className='mt-4 text-white btn-secondary px-4 py-1   max-w-xs' />
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

export default ModuleUpload;

// const onSubmit = data => {
//     const image = data.image[0];
//     const formData = new FormData();
//     formData.append('image', image);
//     const url = `https://api.imgbb.com/1/upload?key=${imageStoragekey}`;
//     fetch(url, {
//         method: 'POST',
//         body: formData
//     })
//         .then(res => res.json())
//         .then(result => {
//             // console.log(result)
//             if (result.success) {
//                 const img = result.data.url;
//                 const product = {
//                     ModuleName: data.ModuleName,
//                     img: img
//                 }

//                 //send to database
//                 fetch('http://localhost:5000/tasks', {
//                     method: 'POST',
//                     headers: {
//                         'content-type': 'application/json'
//                     },
//                     body: JSON.stringify(product)
//                 })
//                     .then(res => res.json())
//                     .then(result => {
//                         console.log('products', result)
//                     })
//                 reset()
//             }

//         })
// };