import React from 'react';

const NoticePublish = () => {
    const handleNoticeForm = event => {
        event.preventDefault();
        const notice = event.target.noticeText.value;
        console.log(notice);
        fetch(`http://localhost:5000/notice`, {
            method: 'POST',
            body: JSON.stringify({ notice}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        
            event.target.reset();
    }
    return (
        <div>
            <h2 className='text-xl text-center'>Notice</h2>
            <form onSubmit={handleNoticeForm} action="">
                <textarea className="textarea textarea-info w-full max-w-xs" placeholder="Notice" name='noticeText'></textarea>
                <br />
                <br />
                <input type="submit" value="Publish" className="input input-bordered input-info bg-sky-400 w-full max-w-xs" />
            </form>
        </div>
    );
};

export default NoticePublish;