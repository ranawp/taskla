import React from 'react';
import { Link } from 'react-router-dom';
import './BlogDetails.css';

const BlogDetails1 = () => {
    return (
        <div className='' >

            <div className='background-style-mongodb' >
                <h1 className='text-3xl mt-7' > mongoDB</h1 >

            </div >

            <div className='image-style' >
                <img src='https://www.liamkids.com/wp-content/uploads/2020/07/MongoDB.jpg' alt='loading'></img>
            </div >




            <div className="px-8" >

                <div className="mt-4  text-justify" >
                    <h1 className='text-3xl mt-7' > What Is MongoDB ? </h1 >
                    <p>MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions
                        MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions
                    </p>
                </div >

                <div className="mt-4 text-justify" >
                    <h1 className='text-3xl mt-7' > How does MongoDB Work ?</h1 >
                    <p>
                        MongoDB stores data objects in collections and documents instead of the tables and rows used in traditional relational databases. Collections comprise sets of documents, which are equivalent to tables in a relational database. Documents consist of key-value pairs, which are the basic unit of data in MongoDB.
                        The structure of a document can be changed by simply adding new fields or deleting existing ones. Documents can define a primary key as a unique identifier, and values can be a variety of data types, including other documents, arrays, and arrays of documents.
                    </p>
                </div >
                <div className="mt-4 text-justify" >
                    <h1 className='text-3xl mt-7' > How Does MongoDB Text Search Work ?</h1 >
                    <p>
                        A key feature of MongoDB is the text search, which can query string fields for specific text or words. A text search can be performed using a text index or the $text operator.
                        A text index can either be a string or an array of string elements. To perform a text search query, the collection must contain a text index. A collection can only have one text index, and a single text index can be applied to multiple fields.
                        A search can also be performed on a collection with a text index using the $text operator. The $text operator tokenizes each search string with white space and treats all punctuation except for “–” and “\” as delimiters. After the search string is tokenized, the operator performs the logical OR operation on the tokens.
                    </p>
                </div >







            </div >

            <Link to="/blog"> <h2 className='text-1xl font-bold mt-4 flex justify-center'>GO TO PREVIER PAGE</h2></Link >

        </div >






    );
};

export default BlogDetails1;