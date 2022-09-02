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
    const [query, setQuery] = useState("")


    useEffect((): void => {
        isLoading(true)
        console.log('singaluser')
        const fetchSideeffect = async () => {
            const res = await axios('https://cryptic-stream-86241.herokuapp.com/user', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessTokenz')}`
                }
            })

            setData(res.data)
            isLoading(false)
        }
        fetchSideeffect()
    }, [])
    const students = data.filter(task => {
        return task.student == "enrolled"
    })
    const studentss = () => {
        console.log("students")
    }

    return (
        <div>
            <h2 className='text-lg text-center font-bold my-5 dark:text-slate-50'>All users</h2>

            <div className='flex justify-between '>
                < select className="select select-bordered mb-2" >
                    <option selected>All Users</option>
                    <option onClick={() => studentss()}>Students</option>
                    <option>Enroll Pending</option>
                    <option>Normal Users</option>
                </select > <br />

                <div className='flex mr-2'>
                    <input
                        type="text"
                        placeholder="search here user email"
                        className="input input-bordered h-7 mb-3 size-30"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

            </div>

            <div className="overflow-x-auto text-primary dark:text-slate-50" >
                {loading && <Loading />}
                <table className="table w-full border dark:border-[#293241]" >

                    <tr className='bg-gray-200  dark:bg-[#182233]'>
                        <th>No.</th>
                        <th>Email</th>
                        <th>select admin</th>
                        <th>Enroll Status</th>
                        <th>User Details</th>
                    </tr>




                    {/* {

                        data.map((user, index) => <UserRow
                            key={user._id}
                            user={user}
                            index={index}
                            setSingelUser={setSingelUser}
                        ></UserRow>)
                    }
                    {singelUser && <UserDetails singelUser={singelUser}></UserDetails>} */}

                    {

                        data.filter((user) => user.email?.toLowerCase().includes(query)).map((user, index) => <UserRow
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