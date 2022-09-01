import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = (book) => {
    const { name, author, description, link, img } = book.book;
    console.log(link)
    return (
        <div className='p-5 dark:text-slate-300 border dark:border-[#FFD700] dark:bg-[#182233] relative'>

            <a className= '' target="_blank" href={link}>

                <img className='w-[130px] mx-auto' src={img} alt="" />
                <h3 className='text-[16px] text-center mt-3 mb-1 font-bold z-0'>{name}</h3>
                <div className='bg-[#bbbfc6d1] opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-100 flex justify-center items-center text-lg font-bold text-slate-100'><p className='p-3 bg-yellow-500 rounded'>READ</p></div>
                <h3 className='text-[14px] text-center font-bold mb-2'>{author}</h3>
                <p className='text-[14px]'>{description}</p>
                
            </a>
        </div>
    );
};

export default BookCard;