import React from 'react';

const StudentMark = ({ singleMark, index }) => {

    return (
        <>
            <tr className='border dark:border-[#293241]'>
                <th className='p-3'>{index + 1}</th>
                <td className='p-3'>{singleMark.taskName}</td>
                <td className='p-3'>{singleMark.taskNo}</td>
                <td className='p-3'>{singleMark.mark}</td>
                <td className='p-3'>{singleMark.scriptfeedback}</td>
                <td className='p-3'>{singleMark.feedbackDate},{singleMark.feedbackHour}</td>
            </tr>
        </>
    );
};

export default StudentMark;