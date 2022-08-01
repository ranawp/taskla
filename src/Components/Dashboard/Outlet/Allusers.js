import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../../Share/Loading';
import UserRow from './UserRow';

const Allusers = () => {
    const [data, setData] = useState([])
    const [loading, isLoading] = useState(false)

    useEffect(() => {
        isLoading(true)
        const fetchSideeffect = async () => {
            const res = await axios('https://sleepy-castle-16675.herokuapp.com/user')
            setData(res.data)
            isLoading(false)
        }
        fetchSideeffect()
    }, [])

    return (
        <div>
            <h2 className='text-2xl'>All users :{data.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th>select admin</th>
                            <th>Remove User</th>
                        </tr>
                        {loading && <Loading></Loading>}
                    </thead>
                    <tbody>

                        {

                            data.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;