import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import logo from '../asset/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');

    };
    const menuItems = <>
        <li className='hover:text-black'><Link to='/'>Home</Link></li>

        <li className='hover:text-black'><Link className='pl-5' to='/blog'>Blog</Link></li>
        <li className='hover:text-black'><Link className='pl-5' to='/about'>About</Link></li>
        <li className='hover:text-black'><Link className='pl-5' to='/dashboard'>Dashboard</Link></li>
        <li>{user ? <Link className='px-5' to='' onClick={logout} >Sign Out</Link> : <Link className='px-5' to="/login">Login</Link>}</li>
        <li className='hover:text-black'><Link className='px-5' to='/contact'>Contact Us</Link></li>
        <li className='hover:text-black'><Link className='pr-5' to='/login'>Login</Link></li>

    </>
    const locatin = useLocation()
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {menuItems}
                        </ul>
                    </div>
                    <img className='w-16' src={logo} alt="" /> <a className=" normal-case  ml-3 font-bold text-2xl text-black"><Link to='/'>TASK<span className='text-black'>LA</span></Link></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className=" menu-horizontal p-0 text-black font-bold">
                        {menuItems}
                    </ul>
                </div>

                {location.pathname == '/dashboard' &&
                    <div className='navbar-end lg:hidden'>
                        <label tabIndex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                }

            </div>
        </div>
    );
};

export default Navbar;