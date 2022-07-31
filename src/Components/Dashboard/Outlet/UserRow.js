import React from 'react';

const UserRow = ({ user, index }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`https://sleepy-castle-16675.herokuapp.com/user/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>

    );
};

export default UserRow;