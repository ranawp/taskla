
import React from 'react';
import './MyTask.css';

const SingleTasks = ({ singleTask, setTaskData, setToogle, setSubmit, setWatchVideo }) => {

    console.log(singleTask)

    const handleClick = task => {
        setTaskData(task);
    }

    const handleSubmit = submit => {
        setSubmit(submit)
    }

    const collection = [{ milstone: "module1" }, { milstone: "module2" }, { milstone: "module3" }, { milstone: "module4" },]


    return (
        <>
            <div className=''>
                <div className='py-2 px-2 text-sm'>

                    <div tabindex="0" className="collapse group collapse-arrow border border-base-300 bg-base-100 rounded-box ">


                        <div onClick={(e) => setToogle(true)}>
                            <div
                                onClick={() => {
                                    handleClick(singleTask)
                                }}

                                className="collapse-title  font-medium flex justify-between pointer-event-none">

                                <div>
                                    {singleTask.MilstoneSerialNo}
                                    {singleTask.MilstoneName}
                                </div>
                                {/* <div>
                                    Due {singleTask.taskDeadline}
                                </div> */}


                            </div>
                        </div>
                        {/* onClick={() => handleSubmit(singleTask)} */}


                        <div className={singleTask.submit == 'lock' ? " collapse-content pointer-events-none " : " collapse-content"}>
                            <p className='bg-primary py-3 text-white px-2 rounded-md' onClick={() => setWatchVideo('00')} >Module Introduction text </p>

                            <p onClick={() => setWatchVideo('01')} className=' mt-3 cursor-pointer bg-primary py-3 text-white px-2 rounded-md'>{singleTask.ModuleNameserial1} </p>
                            <p onClick={() => setWatchVideo('02')} className=' mt-3 cursor-pointer bg-primary py-3 text-white px-2 rounded-md'>{singleTask.ModuleNameserial2} </p>

                            <p onClick={() => setWatchVideo('03')} className=' mt-3 cursor-pointer bg-primary py-3 text-white px-2 rounded-md'>{singleTask.ModuleNameserial3} </p>

                            <p onClick={() => setWatchVideo('04')} className=' mt-3 cursor-pointer bg-primary py-3 text-white px-2 rounded-md'>{singleTask.ModuleNameserial4} </p>
                            <p onClick={() => setWatchVideo('05')} className=' mt-3 cursor-pointer bg-primary py-3 text-white px-2 rounded-md'>{singleTask.ModuleNameserial5} </p>

                            <p onClick={() => setWatchVideo('06')} className=' mt-3 cursor-pointer bg-primary py-3 text-white px-2 rounded-md'>{singleTask.ModuleNameserial6} </p>

                            <p onClick={() => setWatchVideo('assignment')} className=' mt-3 mb-5 cursor-pointer bg-primary py-3 text-white px-2 rounded-md'>{singleTask.asignmentName} </p>




                            <p onClick={(e) => { setToogle(false); handleSubmit(singleTask); }} className=' mt-3 mb-5 cursor-pointer bg-primary py-3 text-white px-2 text-center rounded-md'>Assignment Submit</p>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTasks;