import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../../Share/Loading';
import UserDetails from './UserDetails';
import UserRow from './UserRow';

const Allusers = () => {
    const [data, setData] = useState([])
    const [loading, isLoading] = useState(false);
    const [singelUser, setSingelUser] = useState([]);


    useEffect(() => {
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
            <h2 className='text-lg text-center font-bold my-5'>All users</h2>

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
                        {loading && <Loading></Loading>}
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