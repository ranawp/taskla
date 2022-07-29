import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const Allusers = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://sleepy-castle-16675.herokuapp.com/user')
            .then((response) => response.json())
            .then((data) => setData(data));
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