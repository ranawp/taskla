import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const SingleSubmittedTask = ({ taskDone, answerScript }:any) => {
    // console.log(answerScript)

    return (
        <div>
            <div className='py-2 text-sm'>

                <div

                    tabIndex={0} className="collapse group collapse-arrow border border-base-300 bg-base-100 rounded-box">

                    <div>
                        <div className="collapse-title  font-medium flex justify-between">
                            <div>
                                {taskDone.taskSerial}   {taskDone.taskName} <br />
                                {/* Mark:{answerScript.mark} */}
                            </div>
                            <div>
                                Due:{taskDone.taskDeadline} <br />
                                Submiited Time:
                            </div>

                        </div>
                    </div>
                    {/* onClick={() => handleSubmit(singleTask)} */}

                    <div className="collapse-content">
                        <label className="bg-primary- border-0 px-3 py-1 button  rounded text-white modal-button cursor-pointer">My Submission</label>
                        <p>My submission: {answerScript.taskDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleSubmittedTask;