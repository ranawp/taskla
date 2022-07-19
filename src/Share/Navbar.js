import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const menuItems = <>
        <li className='hover:text-black'><Link to='/'>Home</Link></li>

        <li className='hover:text-black'><Link className='pl-5' to='/blogs'>Blog</Link></li>
        <li className='hover:text-black'><a className='pl-5' href='/#about'>About</a></li>
        <li className='hover:text-black'><a className='px-5' href='/#contact'>Contact Us</a></li>

    </>
    return (
        <div className=''>
            <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {menuItems}
                        </ul>
                    </div>
                    <a class=" normal-case  ml-3 font-bold text-2xl text-black"><Link to='/'>TASK<span className='text-black'>LA</span></Link></a>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class=" menu-horizontal p-0 text-black font-bold">
                        {menuItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;