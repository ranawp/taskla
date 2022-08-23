import React from 'react';
import userDetails from '../../../asset/userDetails.jpg'
import defaultImage from '../../../asset/dummy-iamge.png'
import bg from '../../../asset/bg1.jpg'
const UserDetails = ({ singelUser }) => {
    const { district, division, email, image, name, street } = singelUser;

    return (
        <>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            {<div className="modal modal-middle sm:modal-middle px-5 sm:p-0" >
                <div className="modal-box text-center" style={{ backgroundImage: `url(${bg}) ` }}>
                    <div className='w-full rounded h-44' style={{ backgroundImage: `url(${userDetails}) ` }}></div>
                    <div className="avatar w-36 mt-[-75px]">
                        <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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

                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Close!</label>
                    </div>
                </div>
            </div>}

        </>
    );
};

export default UserDetails;