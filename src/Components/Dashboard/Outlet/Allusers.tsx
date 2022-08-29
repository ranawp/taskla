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
            const res = await axios('https://cryptic-stream-86241.herokuapp.com/user')
            setData(res.data)
            isLoading(false)
        }
        fetchSideeffect()
    }, [])

    return (
        <div>
            <h2 className='text-lg text-center font-bold my-5 dark:text-slate-50'>All users</h2>

            <div className="overflow-x-auto text-primary dark:text-slate-50" >
                <table className="table w-full border dark:border-[#293241]" >
                    
                        <tr className='bg-gray-200  dark:bg-[#182233]'>
                            <th>No.</th>
                            <th>Email</th>
                            <th>select admin</th>
                            <th>Enroll Status</th>
                            <th>User Details</th>
                        </tr>

                    
                    

                        {

                            data.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                setSingelUser={setSingelUser}
                            ></UserRow>)
                        }
                        {singelUser && <UserDetails singelUser={singelUser}></UserDetails>}
                    
                </table >
            </div >
        </div >
    );
};

export default Allusers;