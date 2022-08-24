// import React from 'react';
// import { useEffect } from 'react';
// import './MyTask.css';

// const SingleTasks = ({ singleTask, setTaskData, setToogle, setSubmit }) => {

//     const handleClick = task => {
//         setTaskData(task);
//     }


//     // console.log(singleTask?.ModuleName[0])
//     console.log(singleTask?.ModuleName?.video5)
//     console.log(singleTask?.ModuleName?.video6)
//     // console.log(singleTask?.ModuleName.video6)
//     // singleTask.ModuleName.map((user) =>console.log(user))
//     const handleSubmit = submit => {
//         setSubmit(submit)
//     }



//     return (
//         <>
//             <div>
//                 <div className=' text-sm border'>
//                     <div onClick={(e) => setToogle(true)}>


//                         <div onClick={() => {
//                             handleClick(singleTask)
//                         }}>
//                             {/* { singleTask?.ModuleName.map((item)=>console.log(item))} */}
//                             {''}
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// };

// export default SingleTasks;




// // //////////////////



import React from 'react';
import './MyTask.css';

const SingleTasks = ({ singleTask, setTaskData, setToogle, setSubmit, seeVideos }) => {

    const handleClick = task => {
        setTaskData(task);
    }

    const handleSubmit = submit => {
        setSubmit(submit)
    }

    console.log(singleTask)
    const collection = [{ milstone: "module1" }, { milstone: "module2" }, { milstone: "module3" }, { milstone: "module4" },]


    return (
        <>
            <div>
                <div className='py-2 text-sm'>

                    <div

                        tabindex="0" className="collapse group collapse-arrow border border-base-300 bg-base-100 rounded-box">

                        <div onClick={(e) => setToogle(true)}>
                            <div
                                onClick={() => {
                                    handleClick(singleTask)
                                }}
                                className="collapse-title  font-medium flex justify-between">
                                <div>
                                    {singleTask.taskSerial}  -  {singleTask.taskName}
                                    {singleTask.ModuleName}
                                </div>
                                <div>
                                    Due {singleTask.taskDeadline}
                                </div>


                            </div>
                        </div>
                        {/* onClick={() => handleSubmit(singleTask)} */}


                        <div className=" collapse-content">


                            <div onClick={() => seeVideos(true)}
                                className='cursor-pointer'


                            >video1: {singleTask.video1}</div>


                            <div>{singleTask.video2}</div>
                            <div>{singleTask.video3}</div>







                        </div>



                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTasks;

