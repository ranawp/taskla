import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content" >
                        {/* <!-- Sidebar content here --> */}
                       
                            < li className='hover:bg-primary rounded-lg'> <Link to=''>Dashboard</Link></li >
                            < li className='hover:bg-primary rounded-lg'> <Link to='allusers'>Allusers</Link></li >
                            <li className='hover:bg-purple-600 rounded-lg'><Link to='myprofile'>MyProfile</Link></li>
                            <li className='hover:bg-purple-600 rounded-lg'><Link to='createtask'>TaskCreate</Link></li>
                            <li className='hover:bg-purple-600 rounded-lg'><Link to='mytask'>MyTask</Link></li>
                   
                    </ul>


                </div >
            </div >
        </div >
    );
};

export default Dashboard;