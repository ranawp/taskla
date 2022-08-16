import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
// import userDetails from '../../../asset/userDetails.jpg'
import Loading from '../../../Share/Loading';
import UserDetails from './UserDetails';


const UserRow = ({ user: users, index, setSingelUser }) => {
    const { email, role, enroll, student } = users


    const [user] = useAuthState(auth)
    const emails = user?.email
    const makeAdmin = () => {
        fetch(` http://localhost:5000/user/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => data)
    }
    const paidStudent = () => {
        fetch(` http://localhost:5000/user/student/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(datas => {

                datas

                toast('Enrolled successfully')

            })

    }
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td> {
                ((enroll == 'enrollPending') && (student == 'enrolled')) ?
                    <>
                        <button disabled className="btn btn-xs">enrolled</button> </> :

                    <> {enroll == 'enrollPending' && <button onClick={paidStudent} className="btn btn-xs">enrollPending</button>}</>
            }</td>

            <td><label onClick={() => setSingelUser(users)} className="btn btn-xs modal-button" for="my-modal-6">See-Details</label></td >
        </tr >

    );
};

export default UserRow;