import React from 'react';
import { Link } from 'react-router-dom';
import './BlogDetails.css';

const BlogDetails3 = () => {
    return (
        <div className='' >

            <div className='background-style-javascript' >
                <h1 className='text-3xl mt-7' > JavaScript</h1 >

            </div >

            <div className='image-style' >
                <img src='https://tmarketing.vn/wp-content/uploads/2021/09/JavaScript-la-gi.jpg' alt='loading'></img>
            </div >




            <div className="px-8" >

                <div className="mt-4  text-justify" >
                    <h1 className='text-3xl mt-7' > What Is javaScript ? </h1 >
                    <p>
                        JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries
                    </p>
                </div >

                <div className="mt-4 text-justify" >
                    <h1 className='text-3xl mt-7' > How javascript Work ?</h1 >
                    <p>
                        JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries
                        A key feature of MongoDB is the text search, which can query string fields for specific text or words. A text search can be performed using a text index or the $text operator.
                        A text index can either be a string or an array of string elements. To perform a text search query, the collection must contain a text index. A collection can only have one text index, and a single text index can be applied to multiple fields.
                        A search can also be performed on a collection with a text index using the $text operator. The $text operator tokenizes each search string with white space and treats all punctuation except for “–” and “\” as delimiters. After the search string is tokenized, the operator performs the logical OR operation on the tokens.
                    </p>
                </div >
                <div className="mt-4 text-justify" >
                    <h1 className='text-3xl mt-7' > How Does MongoDB Text Search Work ?</h1 >
                    A key feature of MongoDB is the text search, which can query string fields for specific text or words.A text search can be performed using a text index or the $text operator.
                    A text index can either be a string or an array of string elements.To perform a text search query, the collection must contain a text index.A collection can only have one text index, and a single text index can be applied to multiple fields.
                    A search can also be performed on a collection with a text index using the $text operator.The $text operator tokenizes each search string with white space and treats all punctuation except for “–” and “\” as delimiters.After the search string is tokenized, the operator performs the logical OR operation on the tokens.
                    A key feature of MongoDB is the text search, which can query string fields for specific text or words.A text search can be performed using a text index or the $text operator.
                    A text index can either be a string or an array of string elements.To perform a text search query, the collection must contain a text index.A collection can only have one text index, and a single text index can be applied to multiple fields.
                    A search can also be performed on a collection with a text index using the $text operator.The $text operator tokenizes each search string with white space and treats all punctuation except for “–” and “\” as delimiters.After the search string is tokenized, the operator performs the logical OR operation on the tokens.

                    < p >
                    </p >
                </div >







            </div >

            <Link to="/blog"> <h2 className='text-1xl font-bold mt-4 flex justify-center'>GO TO PREVIER PAGE</h2></Link >

        </div >






    );
};

export default BlogDetails3;