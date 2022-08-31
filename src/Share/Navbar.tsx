import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import logo from '../asset/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import notificationIcon from '../asset/notification.png'
import axios from 'axios';

// import moment from 'moment';
// import dummyImage from '../asset/dummy-iamge.png'

import dummyImage from '../asset/dummy-iamge.png'
import { BiBell } from 'react-icons/bi';
import { WiDaySunny } from 'react-icons/wi';
import { BsMoon } from 'react-icons/bs';
import useDarkMode from '../hooks/useDarkMode';

interface Notice {
    _id: string
    notice: string
    announcement: string
    time: string
    read?: boolean
}

interface Profile {
    _id?: string
    email?: string
    name?: string
    role?: string
    student?: string
    district?: string
    division?: string
    street?: string
    enroll?: string
    phone?: string
    image?: string
}


const Navbar = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [match, setMatch] = useState<Profile>({});
    const [notifications, setNotifications] = useState<Notice[]>([]);

    //fetching those kind of people who is enrolled
    useEffect(() => {
        const fetchSideeffect = async () => {
            const res = await axios(`https://cryptic-stream-86241.herokuapp.com/user/${email}`)
            setMatch(res.data)
        }
        fetchSideeffect()
    }, [email])

    // console.log(match)
    useEffect((): void => {
        fetch(`https://cryptic-stream-86241.herokuapp.com/notice`)
            .then((response) => response.json())
            .then((json) => setNotifications(json));
    }, [])


    const newArray: Notice[] = notifications.filter((ele) => {
        return ele.read == false
    })

    // console.log(newArray)
    const setNoti = (id) => {
        console.log(id)
        fetch(`https://cryptic-stream-86241.herokuapp.com/notice/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())

            .then(data => console.log(data))

            .then(data => data)
    }

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };

    // first menuItems 
    const menuItems = <>
        <li className='hover:text-secondary dark:text-slate-100'><Link to='/'>Home</Link></li>
        <li className='hover:text-secondary dark:text-slate-100' > <Link className='pl-5' to='/blog' > Blog</Link></li >
        <li className='hover:text-secondary dark:text-slate-100' > <Link className='pl-5' to='/contact' > Contact Us</Link ></li >

        {
            user &&
            <>
                {match.student == 'enrolled' &&
                    <>  <li className='hover:text-secondary dark:text-slate-50'><Link className='pl-5' to='/mytask'>Classroom</Link></li>
                    <li className='hover:text-secondary dark:text-slate-50'><Link className='pl-5' to='/elibrary'>E-Library</Link></li>
                        </>
                }
                <li className='hover:text-secondary dark:text-slate-50'><Link className='pl-5' to="/courses">Courses</Link></li >


            </>
        }

        <label className="swap swap-rotate" >
            {/* <!-- this hidden checkbox controls the state --> */}
            <input type="checkbox" onClick={() => setTheme(colorTheme)} />

            {
                colorTheme === 'light' ?
                    (<span className='text-[28px] text-yellow-300'><WiDaySunny /></span>)

                    : (<span className='text-[18px] '><BsMoon /></span>)

            }
        </label>
    </>


    //userProfile info srart
    const userProfileNameLogo = <>
        {/* {match?.image} */}



        <img src={match?.image || dummyImage} className='w-9 border-red-800 border-2 rounded-full mx-auto items-center h-9' alt="" />

    </>

    const userProfileDes = <>
        <li><Link to='/viewprofile' className='pl-5'> View Profile</Link></li >
        {match.student == 'enrolled' && (<><li><Link to='/submittedTask' className='pl-5'> Submitted Task</Link></li >
            <li><Link to='/analytics' className='pl-5'>Students Analytics</Link></li >
            <li><Link to='/addReview' className='pl-5'>Students Review</Link></li >
            <li><Link to='/announcement' className='pl-5'>Announcement</Link></li ></>)}
        <li><Link className='pl-5' to='' onClick={logout} >Sign Out</Link></li >
    </>
    //userProfile info end



    //notification info start
    const userNotificationIndicator = <>
        <div className="indicator">
            <span className="indicator-item  badge bg-red-600 border-0 w-5 text-[10px]">{newArray?.length}</span>
            <div className="grid place-items-center text-primary dark:text-slate-50 text-[24px]"><BiBell /></div>
        </div>
    </>
    const userNotificationDescrip = <>
        {notifications.map(notification => <li key={notification._id} onClick={() => setNoti(notification._id)} className={notification.read == true ? 'line-through p-2 border  hover:bg-blue-100 cursor-pointer dark:text-slate-50' : 'p-2 border  hover:bg-blue-100 cursor-pointer dark:text-slate-50'}>{notification.notice} <span className='text-xs'> {notification.time}</span> </li>)}
    </>
    //notification info start


    // Nav-End MenuItems 


    const menuItem2 = <>

        {/* notification large device start*/}
        {(user && match.student == 'enrolled') && <div className="dropdown hidden md:block">
            <label tabIndex={1} className="">
                <li className='pl-5 cursor-pointer'>
                    {userNotificationIndicator}
                </li ></label>
            <ul tabIndex={1} className="menu dropdown-content p-2 shadow bg-white dark:bg-[#182233] rounded-box w-52 mt-4 h-[380px] overflow-auto ">
                {userNotificationDescrip}
            </ul>
        </div>}
        {/* notification large device end*/}

        {/* notification small device start*/}
        {(user && match.student == 'enrolled') && < div className="collapse md:hidden text-center">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-white peer-checked:bg-secondary peer-checked:text-secondary-content pl-5 cursor-pointer inline-block">
                {userNotificationIndicator}
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                {userNotificationDescrip}
            </div>
        </div>
        }
        {/* notification small device end*/}



        {/* small device user profile info start */}
        {
            user && <div className="collapse md:hidden">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content pl-5 cursor-pointer inline-block">
                    {userProfileNameLogo}
                </div>
                <div className="collapse-content  peer-checked:text-secondary-content">
                    {userProfileDes}
                </div>
            </div>
        }
        {/* small device user profile info end */}

        {/* large device user proile start */}
        {
            user && <div className="dropdown dropdown-end hidden md:block" >
                <label tabIndex={0} className="m-1" >
                    <li className='pl-5 cursor-pointe inline-block' >

                        {userProfileNameLogo}
                    </li >

                </label >
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow dark:text-slate-50 bg-white dark:bg-[#182233] rounded-box w-52" >
                    {userProfileDes}

                </ul >
            </div >
        }
        {/* large device user profile end */}

        <>
            {match?.role == 'admin' && < li className='hover:text-secondary text-center dark:text-slate-50' > <Link className='pl-5' to='/dashboard' >CPanel</Link ></li >}

        </>

        {!user && <li><Link className='ml-4 sm:ml-0 pl-5' to="/login"><button className='btn btn-secondary'>Login</button></Link></li>}
        {
            !(match.role == 'admin') && <>
                {!(match.student == 'enrolled') && !user && <li><Link className='pl-5 ml-4 sm:ml-0' to="/register"><button className='btn btn-primary'>Register</button></Link></li >}

            </>

        }
    </>


    const locatin = useLocation()
    const [open, setOpen] = useState<boolean | null>(null)
    return (
        <div className='shadow-md fixed z-50  w-full bg-white dark:bg-[#0B1221]'>
            <div className='max-w-screen-xl mx-auto' >
                <div className="navbar  Nav " >
                    <div className="navbar-start" >

                        {/* sidebar small device*/}
                        <div id="mySidenav" className={open == true ? 'sidenav shadow-lg bg-white dark:bg-[#182233]' : 'sidenav1'}>
                            <span className="closebtn text-primary dark:text-slate-50" onClick={() => setOpen(false)}>&times;</span>
                            {open && <div className='text-primary dark:text-slate-50'><ul className="text-primary dark:text-slate-50" >
                                {menuItems}
                            </ul >
                                {menuItem2}
                            </div>

                            }
                        </div>

                        {/* sidebar end*/}
                        <img className='w-16' src={logo} alt="" /> <p className=" normal-case  ml-3 font-bold text-2xl text-[#383D8A] dark:text-slate-50" > <Link to='/'>TASKLA</Link ></p >
                    </div >

                    <div className="navbar hidden lg:flex" >

                        <ul className="menu-horizontal gap-5 text-primary dark:text-slate-50 font-bold" >
                            {menuItems}
                        </ul >
                    </div >

                    {/* menuItem End  */}
                    <div className="navbar-end hidden lg:flex" >
                        <ul className=" menu-horizontal p-0 text-primary dark:text-slate-50 font-bold flex justify-center items-center" >
                            {menuItem2}
                        </ul >

                    </div >

                    {/* small device navbar */}
                    <span className='lg:hidden ml-32 text-primary dark:text-slate-50'>
                        <svg onClick={() => setOpen(true)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg >
                    </span>
                </div >
            </div >
        </div>
    );
};

export default Navbar;






{/* <li className='hover:text-secondary dark:text-slate-50'><Link className='pl-5' to='/elibrary'>E-Library</Link></li> */}