import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Admin_Dashboard from './Admin_Dashboard/Admin_Dashboard';
import './Dashboard.css'

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const emails = user?.email
    const [match, setMatch] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/user/${emails}`, {
    //         method: 'GET',
    //         header: {
    //             'content-type': 'application/json'
    //         }
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setMatch(data));

    // }, [emails])

    return (
        <div className='h-screen border mt-20' >
            <div className="drawer drawer-mobile" >
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content" >

                    {/* <!-- Page content here --> */}
                    < Outlet ></Outlet >
                </div >
                <div className="drawer-side border ml-5 shadow-lg mt-5  mr-3" >
                    <label htmlFor="my-drawer-2" className="drawer-overlay" ></label >
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100
                    lg:bg-transparent text-base-content" >
                        {/* <!-- Sidebar content here --> */}
                        < li className='hover:bg-secondary hover:text-white rounded-lg'> <NavLink to=''>Dashboard</NavLink></li >
                        < li className='hover:bg-secondary hover:text-white rounded-lg'> <NavLink to='allusers'>Allusers</NavLink></li >
                        <li className='hover:bg-secondary hover:text-white rounded-lg'><NavLink to='createtask'>TaskCreate</NavLink></li>
                        <li className='hover:bg-secondary hover:text-white rounded-lg'><NavLink to='moduleUpload'>Module Video Uoload</NavLink></li>
                        <li className='hover:bg-secondary hover:text-white rounded-lg'><NavLink to='editTask'>Task Edit</NavLink></li>
                        <li className='hover:bg-secondary hover:text-white rounded-lg'><NavLink to='taskEvaluate'>Task Evaluate</NavLink></li>
                        <li className='hover:bg-secondary hover:text-white rounded-lg'><NavLink to='taskEvaluateCompleted'>Completed Evaluate</NavLink></li>
                        <li className='hover:bg-secondary hover:text-white rounded-lg'><NavLink to='createBlog'>Create Blog</NavLink></li>



                        <li className='hover:bg-secondary hover:text-white rounded-lg'><NavLink to='notice'>Notice</NavLink></li>

                    </ul>
                </div >
            </div >
        </div >
    );
};

export default Dashboard;