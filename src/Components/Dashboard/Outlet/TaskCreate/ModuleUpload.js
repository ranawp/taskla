import React from 'react';
import { useForm } from 'react-hook-form';


const ModuleUpload = () => {
    const { register, handleSubmit, reset } = useForm();
    // const [review, setReview] = useState({});
    // const imageStoragekey = '3cf84befed9b9bcd8f1d01c2b4412701';

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
            <h2 className='text-lg text-center text-primary font-bold mt-7'>
                Upload module video
            </h2>
            <div className=' mx-auto  mb-10 grid lg:grid-cols-2 gap-4'>

                <div className="ml-10 mt-5 w-96 card bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <p>Module Name: <br /></p><input class="input input-bordered w-full max-w-xs" placeholder='Write module Name'  {...register("ModuleName", { required: true, maxLength: 20 })} /> <br />

                            <p className='mt-5'>video 1 :</p> <br /><input class="input input-bordered w-full max-w-xs" placeholder='put video link'  {...register("video1", { required: true })} /> <br />

                            <p className='mt-5'>Video 2 </p> <br /><input class="input input-bordered w-full max-w-xs" placeholder='put video link'  {...register("video2", { required: true })} /> <br />

                            <p className='mt-5'>Video 3 </p> <br /><input class="input input-bordered w-full max-w-xs" placeholder='put video link'  {...register("video3", { required: true })} /> <br />

                            <p className='mt-5'>Video 4 </p> <br /><input class="input input-bordered w-full max-w-xs" placeholder='put video link'  {...register("video4", { required: true })} /> <br />

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