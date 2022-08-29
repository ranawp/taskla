import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import bg1 from '../../asset/bg1.jpg';
import dummyImage from '../../asset/dummy-iamge.png'
import auth from '../../firebase.init';
import EditProfile from './EditProfile';

interface Profile {
    _id?: string
    email?: string
    name?: string
    role?: string
    student?: string
    district?: string
    division?: string
    street?: string
    enroll?: string
    phone?: string
    image?: string
}

const ViewProfile = () => {
    const [data, getData] = useState<Profile>({})
    const [user] = useAuthState(auth)
    const [reset, setReset] = useState<Boolean>(false)

    const emails = user?.email

    useEffect(() => {
        fetch(`https://cryptic-stream-86241.herokuapp.com/user/${emails}`)
            .then((res) => res.json())
            .then((data) => getData(data));

    }, [emails, reset])

    const { name, email, phone, district, division, street, image } = data;
    return (
        <div className="mt-[100px]">
            <h2 className='text-3xl font-bold text-center'>Your  <span className='text-secondary'>Profile</span></h2>
            <div className='card py-12 mt-6 justify-center items-center'>
                <div>
                    <div className="avatar flex justify-center  sm:mt-0">
                        <div className="w-52 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className='' src={image || dummyImage} />
                        </div>

                    </div>

                    <div className='my-3 sm:my-0' >
                        <div className="card w-96 bg-base-100 shadow-xl mt-6">
                            <div className="card-body">

                                <h2 className="text-lg">Student Id:  <span className='text-lg'>9483jcnei98</span></h2>

                                <h2 className="text-lg" > Full Name:    <span className='text-lg'>{name}</span></h2 >

                                <h2 className="text-lg" > Email Address:  <span className='text-lg'>  {email}</span></h2 >
                                <h2 className="text-lg" > Division:  <span className='text-lg'>  {division}</span></h2 >
                                <h2 className="text-lg" > District:  <span className='text-lg'>  {district}</span></h2 >
                                <h2 className="text-lg" > Street:  <span className='text-lg'>  {street}</span></h2 >

                                <h2 className="text-lg" > Phone No:   <span className='text-lg'>  {phone}</span></h2 >

                                <div className="card-actions justify-center mt-6" >
                                    <EditProfile data={data} setReset={setReset}></EditProfile>
                                </div >
                            </div >
                        </div >
                    </div >

                    {/* <div className="bg-base-100 shadow-xl  form-control w-full max-w-[350px] mx-auto mt-6">
                        <fieldset className=" flex flex-wrap border border-solid border-white-300 p-2">
                            <legend className="text-sm mx-auto font-bold">Addresses</legend>
                            <input type="text" defaultValue={division} readOnly name='division' placeholder="Division" className="input input-bordered w-40 max-w-xs mr-2" />
                            <input type="text" defaultValue={district} readOnly name='district' placeholder="District" className="input input-bordered w-40 max-w-xs" />
                            <input type="text" defaultValue={street} readOnly name='street' placeholder="Street" className="input input-bordered w-40 max-w-xs mr-2 mt-2" />
                            <input type="text" defaultValue={phone} readOnly name='phone' placeholder="Phone" className="input input-bordered w-40 max-w-xs mt-2" />
                        </fieldset>
                    </div > */}
                </div >


            </div >









        </div>

    );
};
export default ViewProfile;