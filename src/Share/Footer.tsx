import React from 'react';
import './Footer.css';


const Footer = () => {
  return (

    // start
    <div className='mt-[70px] bg-[#0F172A]'>
      <footer className="footer p-10 text-neutral-content footer-style" >
        <div className='mx-auto ' >
          <span className="footer-title" > Services</span >
          <p className="#" > Reading</p >
          <p className="link link-hover" > Writing</p >
          <p className="link link-hover" > Assignment</p >
          <p className="link link-hover" > Marks</p >
        </div >
        <div className='mx-auto' >
          <span className="footer-title" > Teacher</span >
          <p className="link link-hover" > Mozahid </p >
          <p className="link link-hover" > Masud Rana</p >
          <p className="link link-hover" > Rana Akash</p >
          <p className="link link-hover" > Hridoy Ahmed</p >
        </div >
        <div className='mx-auto' >
          <span className="footer-title" > recourde</span >
          <p className="link link-hover" > google </p >
          <p className="link link-hover" > linkIn</p >
          <p className="link link-hover" > facebook</p >
          <p className="link link-hover" > Hridoy Ahmed</p >
        </div >
        <div className='mx-auto' >
          <span className="footer-title" >Contact</span >
          <p className="link link-hover" > taskal.com </p >
          <p className="link link-hover" > 01308893937</p >
          <p className="link link-hover" > sylhet</p >
          <p className="link link-hover" > +hotline:976</p >
        </div >


      </footer >
      <div>
        <p className='text-center font-bold text-primary py-5'>&copy; All rights reserved 2022</p>
      </div >
    </div >
  );
};

export default Footer;