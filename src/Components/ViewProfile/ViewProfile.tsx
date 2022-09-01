import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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
        fetch(`http://localhost:5000/user/${emails}`)
            .then((res) => res.json())
            .then((data) => getData(data));

    }, [emails, reset])

    const { name, email, phone, district, division, street, image } = data;
    return (
        <div className="mt-[100px]">
            <h2 className='text-3xl font-bold text-center text-primary dark:text-slate-50'>Your  <span className='text-secondary'>Profile</span></h2>
            <div className='card py-12 mt-6 justify-center items-center'>
                <div>
                    <div className="avatar flex justify-center  sm:mt-0">
                        <div className="w-52 mx-auto rounded-full ring ring-primary dark:ring-blue-300 ring-offset-purple-100 ring-offset-2">
                            <img className='' src={image || dummyImage} />
                        </div>

                    </div>

                    <div className='my-3 sm:my-0' >
                        <div className="card w-80 lg:w-96 text-primary dark:text-slate-50 bg-white dark:bg-[#182233] shadow-xl mt-3">
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
                </div >


            </div >









        </div>

    );
};
export default ViewProfile;