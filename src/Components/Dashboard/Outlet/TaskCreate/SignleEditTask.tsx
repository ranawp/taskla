import React from 'react';

const SignleEditTask = ({ taskEvalute, index, seteditvideoModal }) => {
    console.log(taskEvalute)
    const { MilstoneName } = taskEvalute;


    return (
        <>
            <tr>
                {/* <td>{taskNo}</td> */}
                <td>{MilstoneName}</td>

                <td><label htmlFor="module-edit"
                    onClick={() => seteditvideoModal(taskEvalute)}
                    className=' bg-primary border-0 px-3 py-1 button  rounded text-white modal-button' >Upload more video </label></td>
            </tr>
        </>
    );
};

export default SignleEditTask;