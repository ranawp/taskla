import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import bg1 from '../../asset/bg1.jpg';
import dummyImage from '../../asset/dummy-iamge.png'
import auth from '../../firebase.init';
import EditProfile from './EditProfile';

const ViewProfile = () => {
    const [data, getData] = useState([])
    const [user] = useAuthState(auth)
    const [reset, setReset] = useState(false)

    const emails = user?.email

    useEffect(() => {
        fetch(`https://cryptic-stream-86241.herokuapp.com/user/${emails}`, {
            method: 'GET',
            header: {
                'content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => getData(data));

    }, [emails, reset])

    const { name, email, phone, district, division, street, image } = data;
    return (
        <div className='sm:min-h-screen justify-center items-center grid sm:grid-cols-2' style={{ backgroundImage: `url(${bg1})` }
        }>
            <div>
                <div className="avatar flex justify-center mt-3 sm:mt-0">
                    <div className="w-52 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='' src={image || dummyImage} />
                    </div>
                </div>

                <div className=" form-control w-full max-w-[350px] mx-auto mt-4">
                    <fieldset className=" flex flex-wrap border border-solid border-white-300 p-2">
                        <legend className="text-sm mx-auto">Addresses</legend>
                        <input type="text" defaultValue={division} readOnly name='division' placeholder="Division" className="input input-bordered w-40 max-w-xs mr-2" />
                        <input type="text" defaultValue={district} readOnly name='district' placeholder="District" className="input input-bordered w-40 max-w-xs" />
                        <input type="text" defaultValue={street} readOnly name='street' placeholder="Street" className="input input-bordered w-40 max-w-xs mr-2 mt-2" />
                        <input type="text" defaultValue={phone} readOnly name='phone' placeholder="Phone" className="input input-bordered w-40 max-w-xs mt-2" />
                    </fieldset>
                </div >
            </div >
            <div className='my-3 sm:my-0' >
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-xl">StudentId:</h2>
                        <p>9483jcnei98</p>
                        <h2 className="text-xl" > FullName:</h2 >
                        <p>{name}</p>
                        <h2 className="text-xl" > Email Address:</h2 >
                        <p>{email}</p>
                        <h2 className="text-xl" > Phone No:</h2 >
                        <p>{phone}</p>
                        <div className="card-actions justify-end" >
                            <EditProfile data={data} setReset={setReset}></EditProfile>
                        </div >
                    </div >
                </div >
            </div >

        </div >
    );
};
export default ViewProfile;