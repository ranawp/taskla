import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className='mt-12'>
    <footer className="footer p-10 bg-neutral text-neutral-content footer-style">
  <div>
    <span className="footer-title">Services</span> 
    <a className="#">Reading</a>
    <a className="link link-hover">Writing</a>
    <a className="link link-hover">Assignment</a>
    <a className="link link-hover">Marks</a>
  </div> 
  <div>
    <span className="footer-title">Teacher</span> 
    <a className="link link-hover">Mozahid </a>
    <a className="link link-hover">Masud Rana</a>
    <a className="link link-hover">Rana Akash</a>
    <a className="link link-hover">Hridoy Ahmed</a>
  </div> 
  <div>
    <span className="footer-title">Contact</span> 
    <a className="link link-hover">01308893937</a>
    <a className="link link-hover">min11d10@gmail.com</a>
    <a className="link link-hover">Sylhet,Bangladesh</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;