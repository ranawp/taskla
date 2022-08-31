import React from 'react';
import { useForm } from 'react-hook-form';

const ModuleEditModal = ({ editvideoModal, singleTask }) => {
    const taskId = editvideoModal?._id

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault()
        const ModuleNameserial7 = e.target.ModuleNameserial7.value
        const Modulevideo7 = e.target.Modulevideo7.value


        fetch(`https://cryptic-stream-86241.herokuapp.com/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                ModuleNameserial7: ModuleNameserial7 || singleTask?.ModuleNameserial7,
                Modulevideo7: Modulevideo7 || singleTask?.Modulevideo7,
            })

        }).then(res => res.json())
            .then(data => {
                data
                console.log(data)
            })



    }

    return (
        <div>
            <input type="checkbox" id="module-edit" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-80 sm:w-full">
                    <label htmlFor="module-edit" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center">Please update milestone</h3>

                    <form onSubmit={handleSubmit} className='mx-auto border-gray border-2 p-3 w-80 sm:w-96 flex justify-center flex-col items-center'>


                        <div className=" form-control w-full max-w-xs" >
                            <label className="label" >
                                <span className="label-text" > Module name </span >
                            </label >
                            <input type="text" name='ModuleNameserial7' placeholder="Type here module name and serial " className="input input-bordered w-full max-w-xs mb-2" />
                            <label className="label" >
                                <span className="label-text" > Module name </span >
                            </label >
                            <input type="text" name='Modulevideo7' placeholder="vidoe link " className="input input-bordered w-full max-w-xs mb-2" />

                        </div >
                        <div className="form-control w-full max-w-xs mt-3" >
                            <input type="submit" className=" btn w-full max-w-xs" />
                        </div >

                    </form >

                </div>
            </div>

        </div>
    );
};

export default ModuleEditModal;