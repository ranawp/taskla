import React from 'react';

const UserRow = ({ user, index }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    const paidStudent = () => {
        fetch(`http://localhost:5000/user/student/${email}`, {
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
            <td>{role == 'admin' && <button onClick={paidStudent} className="btn btn-xs">Make Student</button>}</td>
            <td><button className="btn btn-xs">Remove User</button></td >
        </tr >

    );
};

export default UserRow;