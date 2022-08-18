import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css'
import logo from '../asset/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import down from '../asset/down-filled-triangular-arrow.png'
import notificationIcon from '../asset/notification.png'
import axios from 'axios';
import moment from 'moment';
import dummyImage from '../asset/dummy-iamge.png'

const Navbar = () => {
    const [user] = useAuthState(auth);
    const emails = user?.email;
    const [match, setMatch] = useState([]);
    const [get, setData] = useState([])
    const [notifications, setNotifications] = useState([]);
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

    useEffect(() => {
        console.log('hello')
        fetch(`http://localhost:5000/notice`)
            .then((response) => response.json())
            .then((json) => setNotifications(json));
    }, [])


    const newArray = notifications.filter((ele) => {
        return ele.read == false
    })

    const setNoti = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/notice/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())

            .then(data => console.log(data))

            .then(data => data)
    }

    useEffect(() => {
        const fetchSideeffect = async () => {
            const res = await axios('http://localhost:5000/user')
            setData(res.data)
        }
        fetchSideeffect()
    }, [])

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };

    // first menuItems 
    const menuItems = <>
        <li className='hover:text-secondary'><NavLink to='/'>Home</NavLink></li>
        <li className='hover:text-secondary' > <Link className='pl-5' to='/blog' > Blog</Link></li >

        {
            user &&
            <>
                {match.student == 'enrolled' &&
                    <>  <li className='hover:text-secondary'><Link className='pl-5' to='/mytask'>MyTask</Link></li>
                        <li className='hover:text-secondary'><Link className='pl-5' to="/classroom">Classroom</Link></li ></>
                }
                <li className='hover:text-secondary'><Link className='pl-5' to="/courses">Courses</Link></li >
                <li className='hover:text-black' > <Link className='pl-5' to='/contact' > Contact Us</Link ></li >

            </>
        }


    </>

    // Nav-End MenuItems 
    const menuItem2 = <>
        {/* notification  */}
        <div className="dropdown">
            <label tabIndex="1" className="">
                <li className='pl-5 cursor-pointer'>
                    <div className="indicator">
                        <span className="indicator-item  badge bg-red-600 border-0 w-5 text-[10px]">{newArray?.length}</span>
                        <div className="grid place-items-center"><img className='w-5 inline' src={notificationIcon} alt="" /></div>
                    </div>
                </li ></label>
            <ul tabIndex="1" className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4 h-[380px] overflow-auto">
                {notifications.map(notification => <li onClick={() => setNoti(notification._id)} className={notification.read == true ? 'line-through p-2 border  hover:bg-blue-100 cursor-pointer' : 'p-2 border  hover:bg-blue-100 cursor-pointer'}>{notification.notice} <span className='text-xs'> moment({notification.time}).fromNow() </span> </li>)}
            </ul>
        </div>
        <div className="dropdown" >
            <label tabIndex="0" className="m-1" >
                <li className='pl-5 cursor-pointer inline-block' >{user?.displayName}
                </li >
                <img className='w-2 cursor-pointer  inline-block' src={down} alt="" />

            </label >
            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52" >
                <li><Link to='/viewprofile' className='pl-5'> View Profile</Link></li >
                <li><Link to='/analytics' className='pl-5'>Students Analytics</Link></li >
                <li><Link to='/addReview' className='pl-5'>Students Review</Link></li >
                <li><Link className='pl-5' to='' onClick={logout} >Sign Out</Link></li >

            </ul >
        </div >
        <>
            {match?.role == 'admin' && < li className='hover:text-black' > <Link className='pl-5' to='/dashboard' >CPanel</Link ></li >}

        </>

        {!user && <li><Link className='pl-5' to="/login"><button className='btn btn-secondary'>Login</button></Link></li>}
        {
            !(match.role == 'admin') && <>
                {!(match.student == 'enrolled') && !user && <li><Link className='pl-5' to="/register"><button className='btn btn-primary'>Register</button></Link></li >}

            </>

        }
    </>

    const locatin = useLocation()
    return (
        <div className='max-w-7xl mx-auto ' >
            <div className="navbar bg-white bg-opacity-90 Nav" >
                <div className="navbar-start" >
                    <div className="dropdown" >
                        <label tabIndex="0" className="btn btn-ghost lg:hidden" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg >
                        </label >
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary" >
                            {menuItems}
                            {menuItem2}
                        </ul >
                    </div >
                    <img className='w-16' src={logo} alt="" /> <p className=" normal-case  ml-3 font-bold text-2xl text-[#383D8A]" > <Link to='/'>TASKLA</Link ></p >
                </div >

                <div className="navbar hidden lg:flex" >
                    <ul className="menu-horizontal gap-5 text-primary font-bold" >
                        {menuItems}
                    </ul >
                </div >

                {/* menuItem End  */}
                <div className="navbar-end hidden lg:flex" >
                    <ul className=" menu-horizontal p-0 text-black font-bold" >
                        {menuItem2}
                    </ul >
                </div >

                {
                    location.pathname == '/dashboard' &&
                    <div className='navbar-end lg:hidden' >
                        <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label >
                    </div >
                }

            </div >
        </div >
    );
};

export default Navbar;