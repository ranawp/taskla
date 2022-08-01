import React from 'react';
import './Footer.css';


const Footer = () => {
  return (

    // start
    <div className='mt-12'>
      <footer className="footer p-10 bg-neutral text-neutral-content footer-style">
        <div className='mx-auto '>
          <span className="footer-title">Services</span>
          <p className="#">Reading</p>
          <p className="link link-hover">Writing</p>
          <p className="link link-hover">Assignment</p>
          <p className="link link-hover">Marks</p>
        </div>
        <div className='mx-auto '>
          <span className="footer-title">Teacher</span>
          <p className="link link-hover">Mozahid </p>
          <p className="link link-hover">Masud Rana</p>
          <p className="link link-hover">Rana Akash</p>
          <p className="link link-hover">Hridoy Ahmed</p>
        </div>
        <div className='mx-auto '>
          <span className="footer-title">Resource</span>
          <p className="link link-hover">Library</p>
          <p className="link link-hover">Blogs</p>
          <p className="link link-hover">Stories</p>
          <p className="link link-hover">Terms and Condition</p>
        </div>
        <div className='mx-auto '>
          <span className="footer-title">Contact</span>
          <p className="link link-hover">01308893937</p>
          <p className="link link-hover">min11d10@gmail.com</p>
          <p className="link link-hover">Sylhet,Bangladesh</p>
        </div>
      </footer>
      <div>
        <p className='text-center font-bold text-gray-600 py-5'>&copy; All rights reserved 2022</p>
      </div>
    </div>
  );
};

export default Footer;