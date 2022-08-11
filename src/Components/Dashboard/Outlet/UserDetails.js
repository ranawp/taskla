import React from 'react';
import userDetails from '../../../asset/userDetails.jpg'
import defaultImage from '../../../asset/dummy-iamge.png'
import bg from '../../../asset/bg1.jpg'
const UserDetails = ({ singelUser }) => {
    const { district, division, email, image, name, street } = singelUser;
    console.log(singelUser)

    return (
        <>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            {<div class="modal modal-middle sm:modal-middle px-5 sm:p-0" >
                <div class="modal-box text-center" style={{ backgroundImage: `url(${bg}) ` }}>
                    <div className='w-full rounded h-44' style={{ backgroundImage: `url(${userDetails}) ` }}></div>
                    <div class="avatar w-36 mt-[-75px]">
                        <div class="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image || defaultImage} />
                        </div>
                    </div>
                    <p className='text-2xl py-3 text-slate-500'>{name}</p>
                    <div className=' text-start'>
                        <p className='text-2xl text-slate-500'>StId: 97548deF</p>
                        <p className='text-2xl text-slate-500'>Email: {email}</p>
                        <p className='text-2xl text-slate-500'>Division: {division}</p>
                        <p className='text-2xl text-slate-500'>District: {district}</p>
                        <p className='text-2xl text-slate-500'>Street: {street}</p>
                    </div>

                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Close!</label>
                    </div>
                </div>
            </div>}

        </>
    );
};

export default UserDetails;