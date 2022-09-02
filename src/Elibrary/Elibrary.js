import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const Elibrary = () => {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([{}]);
    useEffect(() => {
        fetch('https://cryptic-stream-86241.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='mt-28 h-fit'>
            <div className='w-2/4  mx-auto '>
                <input type="text" className='input mb-5 border border-blue-300 dark:border-[#FFD700] w-full bg-transparent text-lg dark:text-slate-200' placeholder='Search by book name' onChange={event => { setSearch(event.target.value) }} />
            </div>
            <div className='max-w-screen-xl mx-auto'>
                <div className='grid md:grid-cols-5'>
                    {books.filter(book => {
                        if (search == '') {
                            return <p className='text-3xl mt-20 text-black'>Your search result is not match</p>
                        }
                        else if (book.name.toLowerCase().includes(search.toLowerCase())) {
                            return book;
                        }
                    }).map(book => <BookCard key={book._id} book={book} />)}
                </div>
            </div>
        </div>
    );
};

export default Elibrary;