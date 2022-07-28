import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='h-screen'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h2 className='text-2xl text-center'>Welcome to Dashboard</h2>
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='invoiceId'><a>Invoice</a></Link></li>
                        <li><Link to='myprofile'><a>MyProfile</a></Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;