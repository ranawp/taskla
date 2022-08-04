import React from 'react';
import bg1 from '../../asset/bg1.jpg';

const MyClass = () => {
    return (
        <div className='bg-no-repeat bg-center h-fit py-20' style={{ backgroundImage: `url(${bg1})` }
        }>

            <h3 className='text-4xl font-bold text-center mt-15 ' > Your assestment coming very soon...</h3 >
            <h4 className='text-2xl font-meidum text-center mt-10' > Submit Your Answer Script Here</h4 >
            <form action="" className='w-2/4 mx-auto mt-10' >
                <textarea className="textarea w-full  h-60 mx-auto" placeholder="Write Your Answer" ></textarea >
                <br />
                <input type="submit " value="Submit" className='btn btn-primary w-full my-10' />
            </form >
        </div >
    );
};

export default MyClass;