import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const emails = user?.email
    const [match, setMatch] = useState([])
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
        <div className='h-screen' >
            <div className="drawer drawer-mobile" >
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content" >
                    <h2 className='text-2xl text-center' > Welcome to Dashboard</h2 >
                    {/* <!-- Page content here --> */}
                    < Outlet ></Outlet >
                </div >
                <div className="drawer-side" >
                    <label htmlFor="my-drawer-2" className="drawer-overlay" ></label >
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content" >
                        {/* <!-- Sidebar content here --> */}
                        < li > <Link to={''}>Allusers</Link></li >
                        <li><Link to='myprofile'>MyProfile</Link></li>
                        <li><Link to='createtask'>TaskCreate</Link></li>
                        {/* {match?.student == 'enrolled' && <li><Link to='mytask'>MyTask</Link></li>} */}
                    </ul>
                </div >
            </div >
        </div >
    );
};

export default Dashboard;