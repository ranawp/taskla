
import React from 'react';
import './MyTask.css';

interface Collection {
    milstone: string
}

const SingleTasks = ({ singleTask, setTaskData, setToogle, setSubmit, setWatchVideo }) => {

    // console.log(singleTask)

    const handleClick = (task) : void => {
        setTaskData(task);
    }

    const handleSubmit = (submit) : void => {
        setSubmit(submit)

    }

    // const collection = [{ milstone: "module1" }, { milstone: "module2" }, { milstone: "module3" }, { milstone: "module4" },]

    const lockIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
    return (
        <>
            <div className=''>
                <div className='py-2 px-2 text-sm'>

                    <div tabIndex={0} className="collapse group collapse-arrow border border-base-300 bg-base-100 rounded-box ">


                        <div onClick={(e) => setToogle(true)}>
                            <div
                                onClick={() => {
                                    handleClick(singleTask)
                                }}

                                className={singleTask.submit == 'lock' ? "collapse-title  font-medium flex justify-between items-center pointer-events-none" : "collapse-title  font-medium flex justify-between items-center"}>

                                <span> {singleTask.MilstoneSerialNo}{singleTask.MilstoneName}</span>



                                {singleTask.submit == 'lock' && <span> {lockIcon}</span>}

                            </div>
                        </div>



                        <div className={singleTask.submit == 'lock' ? " collapse-content cursor-not-allowed pointer-events-none" : " collapse-content"}>

                            <p className='bg-primary py-3 flex justify-between text-white px-2 rounded-md' onClick={() => setWatchVideo('00')} > <span>Module Introduction text </span>{singleTask.submit == 'lock' && <span>
                                {lockIcon}
                            </span>}</p>

                            <p onClick={() => setWatchVideo('01')} className=' mt-3 cursor-pointer flex justify-between bg-primary py-3 text-white px-2 rounded-md'><span> {singleTask.ModuleNameserial1}</span>{singleTask.submit == 'lock' && <span>{lockIcon}
                            </span>} </p>

                            <p onClick={() => setWatchVideo('02')} className=' mt-3 cursor-pointer flex justify-between bg-primary py-3 text-white px-2 rounded-md'><span> {singleTask.ModuleNameserial2}</span>{singleTask.submit == 'lock' && <span>{lockIcon}
                            </span>} </p>

                            <p onClick={() => setWatchVideo('03')} className=' mt-3 cursor-pointer flex justify-between bg-primary py-3 text-white px-2 rounded-md'><span> {singleTask.ModuleNameserial3}</span>{singleTask.submit == 'lock' && <span>{lockIcon}
                            </span>} </p>

                            <p onClick={() => setWatchVideo('04')} className=' mt-3 cursor-pointer flex justify-between bg-primary py-3 text-white px-2 rounded-md'><span> {singleTask.ModuleNameserial4}</span>{singleTask.submit == 'lock' && <span>{lockIcon}
                            </span>} </p>

                            <p onClick={() => setWatchVideo('05')} className=' mt-3 cursor-pointer flex justify-between bg-primary py-3 text-white px-2 rounded-md'><span> {singleTask.ModuleNameserial5}</span>{singleTask.submit == 'lock' && <span>{lockIcon}
                            </span>} </p>

                            <p onClick={() => setWatchVideo('06')} className=' mt-3 cursor-pointer flex justify-between bg-primary py-3 text-white px-2 rounded-md'><span> {singleTask.ModuleNameserial6}</span>{singleTask.submit == 'lock' && <span>{lockIcon}
                            </span>} </p>

                            <p onClick={() => setWatchVideo('assignment')} className=' mt-3 flex mb-5 cursor-pointer bg-primary py-3 text-white text-center px-2 rounded-md'>
                                <span className='grow'> {singleTask.asignmentName}</span>{singleTask.submit == 'lock' && <span>{lockIcon}
                                </span>}
                            </p>

                            <p onClick={(e) => { setToogle(false); handleSubmit(singleTask); }} className=' mt-3 mb-5 cursor-pointer bg-primary py-3 flex text-white px-2 text-center rounded-md'>
                                <span className='grow'>Assignment Submit </span> {singleTask.submit == 'lock' && <span>{lockIcon}</span>}</p>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTasks;