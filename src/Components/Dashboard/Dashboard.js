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
                    
                    {/* <!-- Page content here --> */}
                    < Outlet ></Outlet >
                </div >
                <div className="drawer-side" >
                    <label htmlFor="my-drawer-2" className="drawer-overlay" ></label >
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content" >
                        {/* <!-- Sidebar content here --> */}

                       
                            < li className='hover:bg-primary rounded-lg'> <Link to=''>Dashboard</Link></li >
                            < li className='hover:bg-primary rounded-lg'> <Link to='allusers'>Allusers</Link></li >
                            <li className='hover:bg-purple-600 rounded-lg'><Link to='myprofile'>MyProfile</Link></li>
                            <li className='hover:bg-purple-600 rounded-lg'><Link to='createtask'>TaskCreate</Link></li>
                            <li className='hover:bg-purple-600 rounded-lg'><Link to='mytask'>MyTask</Link></li>
                   

                        < li > <Link to={''}>Allusers</Link></li >
                        <li><Link to='myprofile'>MyProfile</Link></li>
                        <li><Link to='createtask'>TaskCreate</Link></li>

                        {/* {match?.student == 'enrolled' && <li><Link to='mytask'>MyTask</Link></li>} */}

                        <li><Link to='mytask'>MyTask</Link></li>
                        <li><Link to='taskEvaluate'>Task Evaluate</Link></li>


                    </ul>
                </div >
            </div >
        </div >
    );
};

export default Dashboard;