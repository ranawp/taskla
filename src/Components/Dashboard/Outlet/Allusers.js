import React, { useState } from 'react';
import UserRow from './UserRow';

const Allusers = () => {
    const [data, setData] = useState([])
    fetch('http://localhost:5000/user')
        .then((response) => response.json())
        .then((data) => setData(data));
    return (
        <div>
            <h2 className='text-2xl'>all users :{data.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
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