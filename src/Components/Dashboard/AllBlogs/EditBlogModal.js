import React from 'react';

const EditBlogModal = ({ blogEditModal }) => {
    const id = blogEditModal?._id;
    const handleSubmit = (e) => {
        e.preventDefault()
        const blogTitle = e.target.blogTitle.value;
        const blogDescription = e.target.blogDescription.value;

        fetch(`http://localhost:5000/createBlog/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                blogTitle: blogTitle || blogEditModal?.blogTitle,
                blogDescription: blogDescription || blogEditModal?.blogDescription,
            })

        }).then(res => res.json())
            .then(data => data)
        e.target.reset()
        // setReset(true)
    }
    return (
        <div>
            <input type="checkbox" id="Edit-blog-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box mt-28 mb-10 pb-4">
                    <label htmlFor="Edit-blog-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Edit Blog</h3>

                    <form onSubmit={handleSubmit}>
                        <p className="pt-4">Blog Title </p>
                        <input name='blogTitle'
                            className=" mt-2 p-2 rounded-lg background-color" size="50"
                        ></input>

                        <p className='mt-4'>Blog Description</p>
                        <textarea name="blogDescription" id="" cols="60" rows="15"
                            className=" mt-2 p-2 rounded-lg background-color"
                        ></textarea>
                        <br />
                        <input className=' bg-secondary border-0 px-3 py-1 button  rounded text-white' type="submit" value="Submit" />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default EditBlogModal;