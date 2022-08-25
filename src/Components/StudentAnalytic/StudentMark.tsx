import React from 'react';

const StudentMark = ({ singleMark, index }) => {

    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{singleMark.taskName}</td>
                <td>{singleMark.taskNo}</td>
                <td>{singleMark.mark}</td>
                <td>{singleMark.scriptfeedback}</td>
                <td>{singleMark.feedbackDate},{singleMark.feedbackHour}</td>
            </tr>
        </>
    );
};

export default StudentMark;