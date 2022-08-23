// import React from 'react';
// import './MyTask.css';

// const SingleTasks = ({ singleTask, setTaskData, setToogle, setSubmit }) => {

//     const handleClick = task => {
//         setTaskData(task);
//     }

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
//                             {singleTask.ModuleName}
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

const SingleTasks = ({ singleTask, setTaskData, setToogle, setSubmit }) => {

    const handleClick = task => {
        setTaskData(task);
    }

    const handleSubmit = submit => {
        setSubmit(submit)
    }

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


                        {/* <div className=" collapse-content">
                            <p>Module 1 </p>
                            

                            <label

                                onClick={(e) => { setToogle(false); handleSubmit(singleTask); }}
                                className="bg-blue-700 border-0 px-3 py-1 button  rounded text-white modal-button cursor-pointer">Submit</label>

                        </div> */}

                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTasks;

