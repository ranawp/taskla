import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const UserRow = ({ user: users, index }) => {
    const { email, role, enroll, student } = users
    const [match, setMatch] = useState([])
    const [user] = useAuthState(auth)
    const emails = user?.email

    console.log(enroll, student)

    const [status, setStatus] = useState('')
    // console.log(user)
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => data)
    }
    const paidStudent = () => {
        fetch(`http://localhost:5000/user/student/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(datas => {


                console.log(datas)


                toast('Enrolled successfully')

            })




    }

    useEffect(() => {
        fetch(`http://localhost:5000/user/${emails}`, {
            method: 'GET',
            header: {
                'content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => setMatch(data));
    }, [emails])

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

            <td><button className="btn btn-xs">Remove User</button></td >
        </tr >

    );
};

export default UserRow;