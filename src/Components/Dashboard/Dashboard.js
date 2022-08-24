import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {

    const [arrow, setArrow] = useState(false)
    console.log(arrow)
    //toggle and windowInnerwidth start
    const [width, setWidth] = useState(false)
    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {

        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }
    //toggle and windowInnerwidth end



    //sidebar manu 
    const menuItems = <>
        <label htmlFor="my-drawer-2" className="drawer-overlay" ></label >
        <ul className="menu px-4 pb-4 pt-8 rounded-md overflow-y-auto bg-base-100
                    lg:bg-transparent text-base-content overflow-hidden" >

            <div className='flex w-20'>
                <span className='w-[66px] p-4'><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg> </span>< li className='hover:bg-secondary ml-6 hover:text-white rounded-lg w-[132px] '><NavLink to=''>Dashboard</NavLink></li >
            </div>
            <div className='flex w-20 scroll'>
                <span className='w-full p-4'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg></span>
                < li className='hover:bg-secondary ml-6 hover:text-white rounded-lg'> <NavLink to='allusers'>Allusers</NavLink></li >
            </div>
            <div className='flex w-20 scroll'>
                <span className='w-full p-4'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg></span>
                <li className='hover:bg-secondary ml-6 hover:text-white rounded-lg'><NavLink to='createtask'>TaskCreate</NavLink></li>
            </div>
            <div className='flex w-20 scroll'>
                <span className='w-full p-4'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg></span>
                <li className='hover:bg-secondary ml-6 hover:text-white rounded-lg'><NavLink to='moduleUpload'>Module Upload</NavLink></li> <br />

            </div>
            <li className='hover:bg-secondary ml-6 hover:text-white rounded-lg'><NavLink to='editTask'>Task Edit </NavLink></li>
            <div className='flex w-20 scroll'>
                <span className='w-full p-4'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg></span>
                <li className='hover:bg-secondary ml-6 hover:text-white rounded-lg'><NavLink to='taskEvaluate'>Task Evaluate</NavLink></li>
            </div>
            <div className='flex w-20 scroll'>
                <span className='w-full p-4'><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg></span>
                <li className='hover:bg-secondary ml-6 hover:text-white rounded-lg'><NavLink to='taskEvaluateCompleted'>Completed Evaluate</NavLink></li>
            </div>
            <div className='flex w-20 scroll'>
                <span className='w-full p-4'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg></span>
                <li className='hover:bg-secondary ml-6 hover:text-white rounded-lg'><NavLink to='createBlog'>Create Blog</NavLink></li>
            </div>
            <div className='flex w-20 scroll'>
                <span className='w-full p-4'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg></span>
                <li className='hover:bg-secondary ml-6 hover:text-white rounded-lg'><NavLink to='allblogs'>All Blogs</NavLink></li>

            </div>
            <div className='flex w-20 scroll'>
                <span className='w-full p-4'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg></span>
                <li className='hover:bg-secondary ml-6 hover:text-white rounded-lg'><NavLink to='notice'>Notice</NavLink></li>
            </div>



            {/* condition wise rendering arrow sign */}
            <li onClick={() => setWidth(!width)} className={!width ? ' p-1 rounded-r-full absolute top-0 hidden md:block' : ' p-1 rounded-l-full absolute right-0 top-[-8px] hidden md:block'}>{width ? <a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg></a> : <a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg></a>}</li>

            <div onClick={() => setArrow(!arrow)} className='lg:hidden absolute right-0 top-[-8px] z-50' >
                <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden" >
                    {(arrow === true) && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>}
                </label >
            </div >
        </ul>

    </>

    return (
        <div className='h-screen mt-20' >
            <div className="drawer drawer-mobile" >
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content relative" >
                    {<div onClick={() => setArrow(!arrow)} className='lg:hidden absolute left-0 top-[-3px] z-50' >
                        <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden" >
                            {(arrow === false) && <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>}
                        </label >
                    </div >}

                    {/* <!-- Page content here --> */}
                    < Outlet ></Outlet >
                </div >

                {/* sidebar content here */}
                {(windowSize.innerWidth > 768) ? <div className={width ? "drawer-side  hidden md:block  border ml-5 shadow-lg mt-5 mr-3 w-[220px]  overflow-x-hidden" : 'drawer-side border ml-5 shadow-lg mt-5 mr-3 w-[90px]  overflow-x-hidden'}>
                    {menuItems}
                </div > :
                    <div className="drawer-side border hidden ml-5 shadow-lg mt-5 mr-3   overflow-x-hidden" >
                        {menuItems}
                    </div >}
            </div >
        </div >
    );
};

export default Dashboard;