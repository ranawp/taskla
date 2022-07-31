import React, { useState } from 'react';
import bg1 from '../../asset/bg1.jpg';
import dummyImage from '../../asset/dummy-iamge.png'

const ViewProfile = () => {
    const [image, setImage] = useState('')
    const handleFileChange = event => {
        const file = event.target.files[0]
        setImage(file)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        console.log(name, email, image.name)

    }
    return (
        <div className='sm:h-screen justify-center items-center grid sm:grid-cols-2' style={{ backgroundImage: `url(${bg1})` }}>
            <img src={dummyImage} className='w-52 mx-auto pt-5' alt="" />
            <div className='my-3 sm:my-0'>
                <h2 className='text-2xl font-bold my-3'>User Profile</h2>
                <form onSubmit={handleSubmit} className='border-white border-2 p-3 w-80 sm:w-96 flex justify-center flex-col items-center'>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Username</span>
                        </label>
                        <input type="text" name='name' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class=" form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">profile Image</span>
                        </label>
                        <input type="file" onChange={handleFileChange} name='file' placeholder="Type here" class=" input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs mt-3">
                        <input type="submit" class=" btn w-full max-w-xs" />
                    </div>
                </form>
            </div>

        </div>
    );
};
// style={{ backgroundImage: `url(${bg1})` }}
export default ViewProfile;