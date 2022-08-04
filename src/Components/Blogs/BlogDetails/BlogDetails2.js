import React from 'react';
import { Link } from 'react-router-dom';
import './BlogDetails.css';

const BlogDetails2 = () => {
    return (
        <div className='' >

            <div className='background-style-react' >
                <h1 className='text-3xl mt-7' > React </h1 >

            </div >

            <div className='image-style' >
                <img src='https://blog.logrocket.com/wp-content/uploads/2021/09/5-react-performance-optimization-techniques.png' alt='loading'></img>
            </div >




            <div className="px-8" >

                <div className="mt-4  text-justify" >
                    <h1 className='text-3xl mt-7' > What Is React.js ? </h1 >
                    <p>
                        React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
                        React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
                    </p>
                </div >

                <div className="mt-4 text-justify" >
                    <h1 className='text-3xl mt-7' > How does React  Work ?</h1 >
                    <p>
                        ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.
                        It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.
                        This article will explore React’s features, explain how it works, and go over its benefits for front-end developers. We’ll also cover the differences between ReactJS and React Native regarding their roles in the web and mobile app development industry.
                        This article will explore React’s features, explain how it works, and go over its benefits for front-end developers. We’ll also cover the differences between ReactJS and React Native regarding their roles in the web and mobile app development industry.
                        This article will explore React’s features, explain how it works, and go over its benefits for front-end developers. We’ll also cover the differences between ReactJS and React Native regarding their roles in the web and mobile app development industry.


                    </p>
                </div >
                <div className="mt-4 text-justify" >
                    <h1 className='text-3xl mt-7' > How Does React Text Search Work ?</h1 >
                    <p>

                        In the second line, we call the name variable inside a React element by putting it inside the curly brackets.
                        Meanwhile, the ReactDOM.render() function renders the React element on the Document Object Model (DOM) tree, describing the UI.
                        JSX also helps combat Cross-Site Scripting (XSS) attacks. By default, React DOM converts values embedded in JSX to strings before rendering them. Consequently, third parties cannot inject extra code through user input unless it is explicitly written in the application.
                    </p>
                </div >







            </div >

            <Link to="/blog"> <h2 className='text-1xl font-bold mt-4 flex justify-center'>GO TO PREVIER PAGE</h2></Link >

        </div >






    );
};

export default BlogDetails2;