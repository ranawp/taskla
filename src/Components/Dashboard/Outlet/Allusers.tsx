import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../../Share/Loading';
import UserDetails from './UserDetails';
import UserRow from './UserRow';

interface User {
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

const Allusers = () => {
    const [data, setData] = useState<User[]>([])
    const [loading, isLoading] = useState<Boolean>(false);
    const [singelUser, setSingelUser] = useState<any[]>([]);


    useEffect((): void => {
        isLoading(true)
        console.log('singaluser')
        const fetchSideeffect = async () => {
            const res = await axios('http://localhost:5000/user', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessTokenz')}`
                }
            })
            setData(res.data)
            isLoading(false)
        }
        fetchSideeffect()
    }, [])


    return (
        <div>
            <h2 className='text-2xl text-center font-bold my-5'>All <span className='text-secondary'> users</span> </h2>
            {loading && <Loading></Loading>}
            <div className="overflow-x-auto" >
                <table className="table w-full" >
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th>select admin</th>
                            <th>Enroll Status</th>
                            <th>User Details</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody>

                        {

                            data.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                setSingelUser={setSingelUser}
                            ></UserRow>)
                        }
                        {singelUser && <UserDetails singelUser={singelUser}></UserDetails>}
                    </tbody>
                </table >
            </div >
        </div >
    );
};

export default Allusers;