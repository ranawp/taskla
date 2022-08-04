import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const EditProfile = ({ data, setReset }) => {
    const [user] = useAuthState(auth)
    const emails = user?.email
    const [imgLoad, setImgload] = useState(false)
    const [image, setImage] = useState('')
    const imageStoreKey = 'b13c2fea1530fdaae420c7d48efd3bdc';

    const handleFileChange = event => {
        if (event.bubbles) {
            setImgload(true)
        }

        const file = event.target.files[0]

        const formData = new FormData();
        formData.append('image', file)
        const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {

                setImage(data.data.url)
                setImgload(false)

            })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const division = e.target.division.value
        const district = e.target.district.value
        const street = e.target.street.value
        const phone = e.target.phone.value

        fetch(`http://localhost:5000/update/${emails}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name || data?.name,
                email: email || data?.email,
                division: division || data?.division,
                district: district || data?.district,
                street: street || data?.street,
                phone: phone || data?.phone,
                image: image || data?.image,


            })

        }).then(res => res.json())
            .then(data => data)
        e.target.reset()
        setReset(true)
    }
    return (
        <>
            {/* <!-- The button to open modal --> */}
            <label htmlFor="my-modal-6" className="btn modal-button">Edit profile</label>

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle" >
                <div className="modal-box text-center" >
                    <h2 className='text-2xl font-bold my-3'>User Profile</h2>
                    <form onSubmit={handleSubmit} className='mx-auto border-gray border-2 p-3 w-80 sm:w-96 flex justify-center flex-col items-center'>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label >
                            <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div >
                        <div className=" form-control w-full max-w-xs" >
                            <label className="label" >
                                <span className="label-text" > Email</span >
                            </label >
                            <input type="email" defaultValue={emails} name='email' placeholder="Type here" className="input input-bordered w-full max-w-xs mb-2" />

                        </div >


                        {/* fieldset */}
                        < div className=" form-control w-full max-w-[350px]" >
                            <fieldset className=" flex flex-wrap border border-solid border-gray-300 p-2" >
                                <legend className="text-sm" > Addresses</legend >
                                <input type="text" name='division' placeholder="Division" className="input input-bordered w-40 max-w-xs mr-2" />
                                <input type="text" name='district' placeholder="District" className="input input-bordered w-40 max-w-xs" />
                                <input type="text" name='street' placeholder="Street" className="input input-bordered w-40 max-w-xs mr-2 mt-2" />
                                <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-40 max-w-xs mt-2" />

                            </fieldset >
                        </div >

                        <div className="form-control w-full max-w-xs" >
                            <label className="label" >
                                <span className="label-text" > profile Image</span >
                            </label >
                            <input onChange={handleFileChange} type="file" name='file' placeholder="Type here" className=" input-bordered w-full max-w-xs" />
                        </div >
                        <div className="form-control w-full max-w-xs mt-3" >
                            <input htmlFor="my-modal-6" type="submit" disabled={imgLoad} className=" btn w-full max-w-xs" />
                        </div >
                    </form >
                    <div className="modal-action" >
                        <label htmlFor="my-modal-6" className="btn" > Close</label >
                    </div >
                </div >
            </div >
        </>
    );
};
export default EditProfile;