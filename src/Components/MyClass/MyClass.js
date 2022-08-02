import React from 'react';
import bg1 from '../../asset/bg1.jpg';

const MyClass = () => {
    const handleForm = event => {
        event.preventDefault();
        const task = event.target.text.value;
        console.log(task)

        fetch(`http://localhost:5000/answer`, {
            method: 'POST',
            body: JSON.stringify({task}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

            event.target.reset();
    }

    
    return (
        <div className='bg-no-repeat bg-center h-fit py-20' style={{ backgroundImage: `url(${bg1})` }
        }>

<<<<<<< HEAD
            <h3 className='text-4xl font-bold text-center mt-15 '>Your assestment coming very soon...</h3>
            <h4 className='text-2xl font-meidum text-center mt-10'>Submit Your Answer Script Here</h4>
            
            <form onSubmit={handleForm} action="" className='w-2/4 mx-auto mt-10'>
                {/* <textarea className="textarea w-full  h-60 mx-auto" placeholder="Write Your Answer" name='text'></textarea> */}
                <input type='text' className="textarea w-full  h-60 mx-auto" name='text' placeholder="Write Your Answer" ></input>
                <br />
                <input type="submit" value="Submit" className='input input-primary w-full my-10' />
                
            </form>
        </div>
=======
            <h3 className='text-4xl font-bold text-center mt-15 ' > Your assestment coming very soon...</h3 >
            <h4 className='text-2xl font-meidum text-center mt-10' > Submit Your Answer Script Here</h4 >
            <form action="" className='w-2/4 mx-auto mt-10' >
                <textarea className="textarea w-full  h-60 mx-auto" placeholder="Write Your Answer" ></textarea >
                <br />
                <input type="submit " value="Submit" className='btn btn-primary w-full my-10' />
            </form >
        </div >
>>>>>>> c820e77786f54870dc7cfc648d938e3b7cb126dc
    );
};

export default MyClass;