import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import logo from '../asset/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import down from '../asset/down-filled-triangular-arrow.png'

const Navbar = () => {
    const [user] = useAuthState(auth);
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
    console.log(match)
    // console.log(user.displayName)
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    const menuItems = <>
        <li className='hover:text-black'><Link to='/'>Home</Link></li>
        <li className='hover:text-black' > <Link className='pl-5' to='/blog' > Blog</Link></li >

        {
            user &&
            <>
                {match.student == 'enrolled' &&
                    <>  <li><Link className='pl-5' to='/mytask'>MyTask</Link></li>
                        <li><Link className='pl-5' to="/classroom">Classroom</Link></li ></>
                }
                <li><Link className='pl-5' to="/courses">Courses</Link></li >
                <div className="dropdown" >
                    <label tabIndex="0" className="m-1" >
                        <li className='pl-5 cursor-pointer inline-block' > {user?.displayName}
                        </li >
                        <img className='w-2 cursor-pointer  inline-block' src={down} alt="" />

                    </label >
                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52" >
                        <li><Link to='/viewprofile' className='pl-5'> View Profile</Link></li >
                        <li><Link className='pl-5' to='' onClick={logout} >Sign Out</Link></li >

                    </ul >
                </div >
            </>
        }

        <>
            {match.role == 'admin' && < li className='hover:text-black' > <Link className='pl-5' to='/dashboard' >CPanel</Link ></li >}

        </>

        <li><Link className='pl-5' to="/login">Login</Link></li>
        {!(match.role == 'admin') && <>
            {!(match.student == 'enrolled') && <li><Link className='pl-5' to="/register">Register</Link></li >}
            <li className='hover:text-black' > <Link className='pl-5' to='/contact' > Contact Us</Link ></li >
        </>

        }
    </>

    const locatin = useLocation()
    return (
        <div className='max-w-7xl mx-auto' >
            <div className="navbar " >
                <div className="navbar-start" >
                    <div className="dropdown" >
                        <label tabIndex="0" className="btn btn-ghost lg:hidden" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg >
                        </label >
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black" >
                            {menuItems}
                        </ul >
                    </div >
                    <img className='w-16' src={logo} alt="" /> <p className=" normal-case  ml-3 font-bold text-2xl text-black" > <Link to='/'>TASK<span className='text-black'>LA</span></Link ></p >
                </div >

                <div className="navbar-end hidden lg:flex" >
                    <ul className=" menu-horizontal p-0 text-black font-bold" >
                        {menuItems}
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